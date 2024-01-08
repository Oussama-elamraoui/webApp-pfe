import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import Divider from '@mui/material/Divider';
import { DataGrid } from "@mui/x-data-grid";
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from "@mui/material/DialogActions";
import 'leaflet.heat/dist/leaflet-heat.js';
import Calendar from "./calendar"
import IconButton from '@mui/material/IconButton'
import PlaceIcon from '@mui/icons-material/Place'
import PreviewIcon from '@mui/icons-material/Preview';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Modal from 'react-awesome-modal'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import APISerive from "../../APIService";
export default function UserChart({ data }) {
  const [MemberList, setMemberList] = useState([]);
  
  useEffect(() => {
    let mount = true
    APISerive.getMember()
      .then(res => {
        
        setMemberList(res) 
        return () => mount = false
      })
  }, [])


  // ___________ data  _________
  // const rows=()=>{
  //   fetch('http://localhost:8000/Member/', {
  //     method:'GET',  
  //     headers:{
  //       'Content-Type': 'application/json',  
  //       'Authorization': 'a2a76bcaca32becedbd9fc8542dc293f9c98b92b'
  //     }
  //   })
  //   .then(resp => {resp.json()})
  //   .then(res=>{ 
  //   var data=res
  //   return data })
  //   .catch(error => console.log(error))
  // }
  
  
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: " text-white font-bold",
    },
    {
      field: "avatar",
      headerName: "Avatar",
      description: "User profile ",
      sortable: false,
      width: 100,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            {/* <Avatar src={params.row.avatar} sx={{ bgcolor: "#5299e0" }}> */}
            <Avatar src={"/public/image/profile/avatar-1.png"} sx={{ bgcolor: "#5299e0" }}>
              {params.row.firstName && params.row.firstName.split("")[0]}
            </Avatar>
          </div>
        );
      },
    },
    {
      field: "firstname",
      headerName: "First name",
      width: 240,
      editable: true,
      headerClassName: " text-white font-bold",
    },
    {
      field: "lastname",
      headerName: "Last name",
      width: 200,
      editable: true,
      headerClassName: " text-white font-bold",
    },
    {
      field: "email",
      headerName: "Email",
      width: 100,
      editable: true,
      headerClassName: " text-white font-bold",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "user first and last name",
      sortable: false,
      width: 200,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            {params.row.firstname} {params.row.lastname}
          </div>
        );
      },
    },
    // {
    //   field: "Edit",
    //   headerName: "",
    //   description: "delet user info",
    //   sortable: false,
    //   width: 110,
    //   headerClassName: "text-white font-bold",
    //   renderCell: (params) => {
    //     return (
    //       <div>
    //         <Button variant="outlined" onClick={() => handleClickOpen()}>
    //           Slide in alert dialog
    //         </Button>
    //         <Dialog
    //           maxWidth={'md'}
    //           fullWidth={'md'}
    //           fullScreen={fullScreen}
    //           open={show}
    //           onClose={handleClickClose}
    //           aria-labelledby="responsive-dialog-title"
    //         >
    //           <Button variant="outlined">Outlined</Button>
    //           <DialogContent>
    //             <Calendar />
    //           </DialogContent>
    //         </Dialog>
    //       </div>
    //     );
    //   },
    // },
    {
      field: "Preview",
      headerName: "Preview",
      description: "delet user info",
      sortable: false,
      width: 110,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => {
                handleOpen();
                setTargetRow(params.row.id);
              }}
            >
              <PreviewIcon />
            </button>
          </div>
        );
      },
    },
  ];
  let rows = MemberList;
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setShow(true);
  };

  const handleClickClose = () => {
    setShow(false);
  };

  // ___________ functions  ___________
  const userDelete = () => {
    setAllRows((pervRows) =>
      pervRows.filter((eachrow) => {
        return eachrow.id !== targetRow;
      })
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const openModal = () => {
    setDivVisibility(true);
  };

  const closeModal = () => {
    setDivVisibility(false);
  };

  // ___________ states  ___________
  const [open, setOpen] = useState(false);
  const [targetRow, setTargetRow] = useState();
  const [isDivVisible, setDivVisibility] = useState(false);
  const [selected, setSelected] = useState(0)
  return (
    <section className="box-container" style={{ boxShadow:'0px 30px 60px -5px #000', borderRadius: '20px', backgroundColor:'#050629' }} >
      <div className="mx-auto border-none">
        <h1 className="text-2xl">Work team</h1>
        
        <DataGrid
          className={`border-none mt-4`}
          rows={MemberList}
          sx={{ color: "#fff" }}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </div>
      {/* ______________________ */}
      {/* Modal */}
      <Dialog
        maxWidth={'500px'}

        open={open}
        
        aria-labelledby="responsive-dialog-title"
      >
        <ButtonGroup size="large" variant="outlined" aria-label="outlined button group center">
          <Button size="large" variant="outlined"  >Deploiment point<PlaceIcon onClick={() => setSelected(0)} /></Button>
          <Button variant="outlined" size="large" position="">Schedule work<CalendarMonthIcon onClick={() => setSelected(1)} /></Button>
          {handleClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 0,
              color: 'grey',
              width:'20px',
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        </ButtonGroup>
       
        <Divider />
        <Divider />
        <Divider />
        <div style={{ width: '1000px', height: '900px' }}>
          {(selected === 0) && <div className="mapContainer">
            <LeafletMap
              center={[51.505, -0.09]}
              zoom={13}
              attributionControl={true}
              zoomControl={true}
            >
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community" />

              <Marker position={[51.505, -0.09]}>
                <Popup>
                  Popup for any custom information.
                </Popup>
              </Marker>
            </LeafletMap>
          </div>}
          {(selected === 1) &&
            <Calendar />}
        </div>
        {/* <DialogActions className="bg-secondary/90">
          <Button variant="contained" color="success" onClick={handleClose}>
            Ignore
          </Button>
          {/* <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleClose();
              userDelete();
            }}
          >
            Delete
          </Button> 
          </DialogActions> */}
      </Dialog>
    </section>
  );
}

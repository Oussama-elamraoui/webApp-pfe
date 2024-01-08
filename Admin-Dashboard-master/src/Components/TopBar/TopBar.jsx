import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';
import "./topbar.css"
import { Avatar } from "@mui/material";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
const SettingsBox = ({ onClose }) => {
  const mydata = false
  return (
    <div className="settings-box">
      {/* Content of the settings box goes here */}
      <h2>Special Form</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default function TopBar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      {/* top nav container */}
      <div className="w-full flex justify-end fixed top-0 topbar-shadow   z-20" >
        {/* nav */}
        <nav className="md:w-[70%] lg:w-[73%] xl:w-[80%] w-full bg-primary h-20  flex justify-between items-center px-2 pl-10 md:pl-2 realtive" style={{ backgroundColor: '#050629' }}>
          {/* ============================ */}
          {/* menu icon and logo */}
          <div className="">
            {/* menu icon */}
            <Link to="/dashboard" className="md:hidden">
              <MenuIcon className="md:hidden text-white absolute left-2 top-2 text-2xl" />
            </Link>
            {/* logo */}
            {/* <img
              src={logo}
              
              alt="logo image"
            />*/}
            <Avatar src="/public/image/profile/avatar-1.png" className="sm:w-[250px] w-1/2 sm:static absolute bottom-1 left-2" sx={{ bgcolor: "f9f9f9" }}></Avatar>
            {/* <h2 className="text-white/90 uppercase  text-2xl">AI Movement</h2> */}

          </div>
          {/* ============================ */}
          {/* !right side ==> logo and avatar */}
          <div className="text-white flex flex-row-reverse items-center">
            <Link >
              <LogoutIcon sx={{ fontSize: 22 }} className="hover:scale-105  m-1" onClick={handleClickOpen} />

            </Link>
            {/* avatar */}

            {/* ============== */}
            {/* icons */}
            <Link>
              <SettingsRoundedIcon sx={{ fontSize: 22 }} className="hover:scale-105  m-1" />
              <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Do you agree to end this session?"}</DialogTitle>
                <DialogContent> 
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={refreshPage}>Agree</Button>
                </DialogActions>
              </Dialog>
            </Link>
            <Link className="relative">
              <NotificationsRoundedIcon sx={{ fontSize: 22 }} className="hover:scale-105  m-1" />
              <span className="absolute top-0 bg-red w-4 h-4 rounded-full text-center  text-[10px] right-0 ">
                2
              </span>
            </Link>
            <Link className="relative">
              <LanguageIcon sx={{ fontSize: 22 }} className="hover:scale-105  m-1" />
              <span className="absolute top-0 bg-red w-4 h-4 rounded-full text-center  text-[10px] right-0">
                2
              </span>
            </Link>
            {/* ============== */}

          </div>
          
        </nav>
      </div>
    </>
  );
}

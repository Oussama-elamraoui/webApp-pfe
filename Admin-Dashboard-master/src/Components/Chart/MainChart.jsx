
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import 'leaflet/dist/leaflet.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import * as L from "leaflet";

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import App from './points';
import M1_data from './M1_data.json';
import M1_Tr1 from './M1_Tr1.json'
import APISerive from '../../APIService'
import styled from 'styled-components';
import './home.css';
import M1_Tr2 from './M1_Tr2.json'
import M1_Tr3 from './M1_Tr3.json'
import M1_Tr4 from './M1_Tr4.json'
import M1_Tr5 from './M1_Tr5.json'
 


const Timeslot=[M1_Tr1,M1_Tr2,M1_Tr3,M1_Tr4,M1_Tr5,M1_Tr1,M1_Tr2,M1_Tr3,M1_Tr4,M1_Tr5,M1_Tr1,M1_Tr2]
export default function MainChart() {
  const [MemberList, setMemberList] = useState([])
  const LeafIcon = new L.Icon({
    iconUrl: 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
    iconSize: [30, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const blueIcon = new L.Icon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    iconSize: [30, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    let mount = true
    APISerive.getMember()
      .then(res => {

        setMemberList(res)
        return () => mount = false
      })
  }, [])

  const [personName, setPersonName] = React.useState([]);
  const [selected, setSelected] = useState(0)
  const [isDivVisible, setDivVisibility] = useState(false);
  const [timslot, settimeSlot] = useState(0)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const choices = [
    { id: 0, text: 'Time slot 1' },
    { id: 1, text: 'Time slot 2' },
    { id: 2, text: 'Time slot 3' },
    { id: 3, text: 'Time slot 4'},
    { id: 4, text: 'Time slot 5' },
    { id: 5, text: 'Time slot 6' },
    { id: 6, text: 'Time slot 7' },
    { id: 7, text: 'Time slot 8' },
    { id: 8, text: 'Time slot 9' },
    { id: 9, text: 'Time slot 10 ' },
    { id: 10, text: 'Time slot 11' },
    { id: 11, text: 'Time slot 12' },
    
  ];


  const [selectedChoice, setSelectedChoice] = useState(1);

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice.id);
  };



  return (
    <>

      <section className="h-[80%]">
        <div>
          Potential Patrols Points
        <div className="single-choice-with-date">
      {choices.map((choice) => (
        <div
          key={choice.id}
          className={`choice ${selectedChoice === choice.id ? 'selected' : ''}`}
          onClick={() => handleChoiceSelect(choice)}
        >
          {choice.text}
          <div className="date">{new Date().toLocaleDateString()}</div>
        </div>
      ))}
    </div>
          <LeafletMap
            center={[51.505, -0.09]}
            zoom={16}
            attributionControl={true}
            zoomControl={true}

          >
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community" />
            {Timeslot[selectedChoice].map(d =>
              <Marker position={[Number(d.Y), Number(d.X)]} icon={(personName.length == 0) ? blueIcon : LeafIcon}>
                <Popup>
                  <React.Fragment>
                    <CardContent>
                      {(personName.length != 0) &&
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                          For this point {personName} was chosen!
                        </Typography>}
                      {(personName.length == 0) &&
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                          No one for this point
                        </Typography>}
                      <CardActions>
                        <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>re-selection :</Typography>
                      </CardActions>
                      <FormControl sx={{ m: 1, width: 300 }} visible={isDivVisible}>
                        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(', ')
                          }

                          MenuProps={MenuProps}
                        >
                          {MemberList.map((item) => (
                            <MenuItem key={item.firstname + item.lastname} value={item.firstname + item.lastname}>
                              <Checkbox checked={personName.indexOf(item.firstname + item.lastname) > -1} />
                              <ListItemText primary={item.firstname + ' ' + item.lastname} />
                            </MenuItem>
                          ))}
                        </Select>
                        <Button onClick={() => setSelected(0)} size="large">Save</Button>
                      </FormControl>
                    </CardContent>
                  </React.Fragment>

                </Popup>
              </Marker>)};

          </LeafletMap>
        </div>

        {/* <ResponsiveContainer >
        <LineChart
          width={600}
          height={300}
          data={infoData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer> */}
      </section>
    </>
  );
}
MainChart.propTypes = {
  infoData: PropTypes.array.isRequired
}

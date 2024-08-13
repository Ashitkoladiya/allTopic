import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

function Country() {
  const countries = [
    {
      name: "United States",
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    },
    {
      name: "Canada",
      states: [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon Territory",
      ],
    },
    {
      name: "Mexico",
      states: [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Durango",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "México",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas",
      ],
    },
    {
      name: "India",
      states: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
      ],
    },
  ];
  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [value, setValue] = useState([]);
  console.log(name);
  // const handleChange = (event) => {
  //   setName(event.target.value);
  //   const newstate =countries.find((e)=>e.name == event.target.value)
  //   setState(newstate.states)
  // };

  return (
    <>
      <Box sx={{ display: "flex", width: "1000px" }}>
        <FormControl
          sx={{ m: 1, maxWidth: "500px", display: "flex", width: 300 }}
        >
          <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={name}
            label="Country"
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            {countries.map((item, index) => (
              <MenuItem onClick={()=>setState(item.states)} value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, maxWidth: "500px", display: "flex", width: 300 }}
        >
          <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={value}
            disabled={!name}
            label="value"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            {state.map((item, index) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default Country;

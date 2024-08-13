import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { TextareaAutosize } from "@mui/base";

function FormTheme({ setTableData, handleClose, editData }) {
  console.log(editData,"editData=============");
  const [data, setData] = useState({
    name: editData ? editData.name : "",
    number:editData ? editData.number : "",
    email: editData ? editData.email :"",
    comments: "",
    select: "",
    checkBox: [],
    redio: "",
    file: "",
    date: "",
    time: "",
  });

  const handlechange = (event) => {
    if (event.target.name === "checkBox") {
      const checkvalue = data;
      if (event.target.checked) {
        checkvalue.checkBox.push(event.target.value);
        setData(checkvalue);
      } else {
        const filterArray = checkvalue.checkBox.filter(
          (e) => e !== event.target.value
        );
        setData({ ...data, checkBox: filterArray });
        console.log(checkvalue, "2");
      }
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const handlesubmit = () => {
    if(editData){
        setTableData((pre)=>{
          console.log(pre,"[][][][]");
          const newData=pre.map((item,index)=>{
            if(index===editData.index){
              return data
            }
            return item
          })
          return newData
        })
       
    }else{
      console.log(data, "realData");
      setTableData((pre) => [...pre, data]);
      
      }
    handleClose();
  };
  return (
    <>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="20px"
      >
        <h1 style={{ textAlign: "center", fontSize: "40px" }}>User Form</h1>
        <Box
          autoComplete="off"
          display="flex"
          width="fit-content"
          flexDirection="column"
          justifyContent="center"
          gap="10px"
        >
          <FormControl fullWidth>
            <TextField
              label="Enter Name"
              type="text"
              name="name"
              value={data.name}
              onChange={handlechange}
            />
          </FormControl>
          <TextField
            label="Enter Number"
            type="number"
            name="number"
            value={data.number}
            onChange={handlechange}
          />
          <TextField
            label="Enter Email"
            type="email"
            name="email"
            value={data.email}
            onChange={handlechange}
          />

          <FormControl fullWidth>
            <InputLabel>Age</InputLabel>
            <Select label="Age" onChange={handlechange} name="select">
              <MenuItem value={"0 to 18"}>0 to 18</MenuItem>
              <MenuItem value={"19 to 38"}>19 to 38</MenuItem>
              <MenuItem value={"39 to 50"}>39 to 50</MenuItem>
              <MenuItem value={"50 Above"}>50 Above</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <FormControl>
              <FormLabel>Option</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handlechange}
                      name="checkBox"
                      value={"A"}
                    />
                  }
                  label="A"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handlechange}
                      name="checkBox"
                      value={"B"}
                    />
                  }
                  label="B"
                />
              </FormGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup defaultValue="" onChange={handlechange} name="redio">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <TextField type="file" onChange={handlechange} name="file" />
          <TextField type="date" onChange={handlechange} name="date" />
          <TextField type="time" onChange={handlechange} name="time" />

          <TextareaAutosize
            label="Comments"
            placeholder="Put Your Comments"
            onChange={handlechange}
            name="comments"
          />
          {/* <Button sx={{ width: "100%" }} >
          Submit
        </Button> */}
          <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
            <Button onClick={handlesubmit}>Add Data</Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default FormTheme;

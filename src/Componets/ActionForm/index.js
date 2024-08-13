import {
  Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormTheme from "../Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ActionForm() {
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setEditData(null);
    setOpen(false);
  };
  console.log(editData, "editData");

  const handleDelete = (index) => {
    const data = [...tableData];
    data.splice(index, 1);
    setTableData(data);
  };

  const handelEdit = (data, index) => {
    setEditData({ ...data, index: index });
    handleOpen();
  };
  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <FormTheme
              setTableData={setTableData}
              handleClose={handleClose}
              editData={editData}
            />
          </Box>
        </Modal>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.number}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                  <Button onClick={() => handelEdit(item, index)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
    </>
  );
}

export default ActionForm;

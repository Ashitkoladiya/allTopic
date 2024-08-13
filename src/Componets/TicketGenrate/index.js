import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GenralModal from "../GenralModal";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TicketGenrate() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    count: 0,
  });
  const [pedding, setPedding] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const changedData = e.target;
    setData({ ...data, [changedData.name]: changedData.value });
  };
  const handleClick = () => {
    if (isEdit !== null) {
      const editData = pedding.map((v, index) => {
        if (index == isEdit) {
          return data;
        } else {
          return v;
        }
      });
      setPedding(editData);
    } else {
      setPedding([...pedding, data]);
    }
    setOpen(false);
    data.count = 0;
  };
  const handleRemove = (id) => {
    const deletedData = pedding.filter((v, index) => index !== id);
    setPedding(deletedData);
  };
  const handleEdit = (id) => {
    setIsEdit(id);
    setOpen(true);
    setData(pedding[id]);
  };
  const handleSend = (id) => {
    const sendData = pedding.filter((v, i) => i !== id);
    setPedding(sendData);
    setProgress([...progress, pedding[id]]);
  };
  const handleComplete = (id) => {
    const sendtoComplete = progress.filter((v, i) => i !== id);
    setProgress(sendtoComplete);
    setCompleted([...completed, progress[id]]);
  };
  const backtoPendding = (id) => {
    const returnPending = completed.filter((v, i) => i !== id);
    setCompleted(returnPending);
    const newData = completed[id];
    setPedding([...pedding, newData]);
    newData.count += 1;
  };
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Button onClick={() => setOpen(true)}>Add Tickets</Button>
      </Box>
      <GenralModal open={open} handleClose={handleClose}>
        <TextField
          type="text"
          placeholder="enter Title"
          name="title"
          onChange={handleChange}
          value={data.title}
        />
        <TextField
          type="text"
          name="description"
          placeholder="enter Description"
          onChange={handleChange}
          value={data.description}
        />
        <Button onClick={handleClick}>Submit</Button>
      </GenralModal>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CommanPaper
          title="Genreted Tickets"
          actions={(id) => (
            <Box>
              <SendIcon onClick={() => handleSend(id)} />
              <EditIcon onClick={() => handleEdit(id)} />
              <DeleteIcon onClick={() => handleRemove(id)} />
            </Box>
          )}
          data={pedding}
        />
        <CommanPaper
          title=" pending"
          actions={(id) => <SendIcon onClick={() => handleComplete(id)} />}
          data={progress}
        />
        <CommanPaper
          title=" Completed"
          actions={(id) => <SendIcon onClick={() => backtoPendding(id)} />}
          data={completed}
        />
      </Box>
    </>
  );
}

export default TicketGenrate;

const CommanPaper = ({ title = "", data = [], actions = () => {} }) => {
  return (
    <>
      <Paper sx={{ padding: "16px" }}>
        <h1
          style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold" }}
        >
          {title}
        </h1>
        {data?.map((e, index) => {
          return (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                {e.count}
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {e.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {e.description}
                </Typography>
              </CardContent>
              <CardActions>{actions(index)}</CardActions>
            </Card>
          );
        })}
      </Paper>
    </>
  );
};

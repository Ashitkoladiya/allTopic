import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";
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
  display: "grid",
  gap: "10px",
};

function TodoData() {
  const [data, setData] = useState({
    task: "",
    priority: 0,
  });
  const [paddTask, setPaddTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlechange = (e) => {
    const value = e.target;
    setData({ ...data, [value.name]: value.value });
  };
  const handleSubmit = () => {
    console.log(data, "data");
    setPaddTask([...paddTask, data].sort((a, b) => a.priority - b.priority));
    handleClose(true);
  };
  const handleClick = (index) => {
    // remove itme from the panding task
    const reminingData = paddTask.filter((v, ind) => ind !== index);
    setPaddTask(reminingData);
    // add date into completed task
    setCompletedTask([...completedTask, paddTask[index]]);
  };
  return (
    <>
      <Box>
        <Button onClick={handleOpen}>Add Task</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Input
              placeholder="Enter Task Name"
              name="task"
              onChange={handlechange}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Priority of Task
              </InputLabel>
              <Select
                label="Priority of Task"
                labelId="demo-simple-select-label"
                name="priority"
                onChange={handlechange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={handleSubmit}>Add Task</Button>
          </Box>
        </Modal>
      </Box>

      <RenderTask data={paddTask} handleClick={handleClick} />
      <RenderTask data={completedTask} />
    </>
  );
}

export default TodoData;

const RenderTask = ({ data, handleClick }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Pending Task
        </Typography>
        <List>
          {data.map((item, index) => {
            return (
              <ListItem>
                {item.task}{" "}
                {handleClick && (
                  <CheckIcon onClick={() => handleClick(index)} />
                )}
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

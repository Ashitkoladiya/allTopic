import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function CommentsDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "commentDetail");
  const newdata = location.state;
  console.log(newdata);
  return (
    <>
      {/* <Button variant="contained" style={{marginBottom:"20px"}}>Back</Button> */}
      <KeyboardBackspaceIcon
        sx={{
          marginBottom: "20px",
          cursor: "pointer",
          width: "40px",
          height: "40px",
        }}
        onClick={() => navigate(-1)}
      />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {newdata.id}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {newdata.title}
            </Typography>
            {/* <Typography gutterBottom variant="h5" component="div">
              {newdata.email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "gray" }}
            >
              {newdata.body}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CommentsDetail;

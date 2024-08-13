import { Paper, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function PokemonDetail() {
  const loaction = useLocation();
  const { state } = loaction;
  return (
    <div>
      <Paper elevation={4} sx={{display:"inline-block",padding:"16px",textAlign:"center"}}>
        <img src={state.photo}/>
        <Typography>{state.name}</Typography>
      </Paper>
    </div>
  );
}

export default PokemonDetail;

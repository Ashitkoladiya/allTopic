import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function GuessGame() {
  return (
    <>
      <Startgame />
    </>
  );
}

export default GuessGame;

const Startgame = () => {
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = useState(0);
  const [finalNumber, setFinalNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [guess, setGuess] = useState(false);
  const [guessLow, setGuessLow] = useState(false);
  const [guessHigh, setGuessHigh] = useState(false);
  const [count, setCount] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(finalNumber);

  const handleguess = () => {
    setCount(count + 1);
    if (number == finalNumber) {
      setGuess(true);
      setGuessLow(false);
      setGuessHigh(false);
    } else if (number < finalNumber) {
      setGuessLow(true);
      setGuess(false);
      setGuessHigh(false);
    } else if (number > finalNumber) {
      setGuessHigh(true);
      setGuess(false);
      setGuessLow(false);
    }
  };
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <div>
        <Button onClick={handleOpen}>Let's Play</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1
              style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              Guess The Number
            </h1>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "20px 0px",
              }}
            >
              <p>
                How Many Time Guess:{" "}
                <span style={{ fontWeight: "bold" }}>{count}</span>
              </p>
              {guess == true ? (
                <Alert severity="success">Guess Matched</Alert>
              ) : guessHigh == true ? (
                <Alert severity="warning">Guess Is Too High</Alert>
              ) : guessLow == true ? (
                <Alert severity="error">Guess Is Too Low</Alert>
              ) : (
                ""
              )}
            </Box>
            <TextField
              type="number"
              sx={{ width: "100%" }}
              placeholder="Type any number between 1 to 100"
              onChange={handleChange}
            />
            <Button
              onClick={handleguess}
              sx={{ alignItems: "center", width: "100%", margin: "10px 0px" }}
            >
              Guess
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

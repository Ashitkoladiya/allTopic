import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PokePhoto({ data }) {
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const newphoto = async () => {
    const newres = await fetch(data.url);
    const photoData = await newres.json();
    const imgurl = photoData.sprites?.front_default;

    setPhoto(imgurl);
  };
  useEffect(() => {
    newphoto();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{ maxWidth: 345, position: "relative" }}
        onClick={() =>
          navigate("/pokemon-detail", {
            state: { photo, name: data.name },
          })
        }
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          position="relative"
          //   sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
        >
          {" "}
          <CircularProgress
            sx={{
              opacity: !isLoading ? 0 : 1,
              margin: "auto",
              position: "absolute",
            }}
          />
          <CardActionArea>
            <img
              src={photo}
              onLoad={() => setIsLoading(false)}
              style={{
                opacity: isLoading ? 0 : 1,
                transition: "all 0.3s ease-in-out",
                margin: "auto",
                height: "100px",
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Box>
      </Card>
    </>
  );
}

export default PokePhoto;

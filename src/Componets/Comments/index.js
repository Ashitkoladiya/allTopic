import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Comments() {
  const [data, setData] = useState([]);
  console.log(data, "data");
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const newdata = await res.json();
    setData(newdata);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "15px",
          flexWrap: "wrap",
          gap: "10px",
          maxHeight: "200px",
          height: "100%",
        }}
      >
        {data?.map((item) => {
          return (
            <Card
              sx={{ maxWidth: 345, height: "100%" }}
              onClick={() =>
                navigate("/comments/comment-detail", { state: item })
              }
              key={item.id}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ wordWrap: "break-word" }}
                  >
                    {item.completed}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Comments;

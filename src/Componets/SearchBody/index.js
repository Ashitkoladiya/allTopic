import {
  Card,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function SearchBody() {
  const [data, setData] = useState([]);
  const [allData, setallData] = useState([]);
  const [search, setSearch] = useState(null);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newdata = await res.json();
    setData(newdata);
    setallData(newdata);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      const filterdData = allData.filter((v, i) =>
        v.body.includes(e.target.value)
      );
      setData(filterdData);
    } else {
      setData(allData);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <TextField
        placeholder="Search Here"
        value={search}
        onChange={handleChange}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "15px",
          flexWrap: "wrap",
          gap: "10px",
          height: "fit-content",
        }}
      >
        {data?.map((item) => {
          return (
            <Card sx={{ maxWidth: 345, height: "100%" }} key={item.id}>
              <CardActionArea sx={{ height: "100%" }}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.body}
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

export default SearchBody;

import React, { useEffect, useState } from "react";
import PokePhoto from "./pokephoto";
import AccordionTheme from "../Accordion";

function Pokemon() {
  const [data, setData] = useState([]);

  const fatchapi = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const newData = await res.json();
    setData(newData.results);
  };
  useEffect(() => {
    fatchapi();
  }, []);
  return (
    <>
    {/* <AccordionTheme data={data}/> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-around",
        }}
      >
        {data?.map((item) => {
          return (
            <>
              <PokePhoto data={item} />
              
            </>
          );
        })}
      </div>
    </>
  );
}

export default Pokemon;

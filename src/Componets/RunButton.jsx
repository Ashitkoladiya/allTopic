import React, { useState } from "react";

function RunButton() {
  const [scrore, setscrore] = useState(0);
  //   const [target , setTarget]= useState(0);
  const [team , setTeam]= useState(false)
  const [ball, setBall] = useState(0);
//   const [over, setOver] = useState(0);
  //   console.log(ball, "][][][][]");
  const runtype = [1, 2, 3, 4, 5, 6, "Wicket", "Wide", "No Ball"];
  let newover = parseInt(ball / 6);
  let newball = ball % 6;
  const handleClick = (i) => {
    if (typeof i === "number") {
      setscrore(scrore + i);
      setBall(ball + 1);
    } else {
      if (i === "Wide" || i === "No Ball") {
        setscrore(scrore + 1);
      }
    }

    // console.log(newover,"[][][][]]");
    if(newover == 2 || newball == 9){
        setTeam(true);
        alert("Team 2 turn");
    }
  };
  
//   console.log(newball);


  return (
    <>
    <h1>Team {team == false ? '1' : '2'} playing</h1>
      <h1>Scrore : {scrore}</h1>
      <h2>
        Over : {newover}.{newball}
      </h2>
      <div>
        {runtype.map((i) => (
          <button onClick={() => handleClick(i)} key={i}>
            {i}
          </button>
        ))}
      </div>
    </>
  );
}

export default RunButton;

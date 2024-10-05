import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import  Reload from "@/components/new-game";
import React, { useState, useEffect } from 'react';
import { Heart, HeartOff } from "lucide-react";
import CustomizedDot  from  "@/components/custom-dot";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const Heroes = () => {
  const [inputValue, setInputValue] = useState("");
  const [constId, setConstID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [life, setLife] = useState(0);
  const [point, setPoints] = useState(0);
  const [explored, setExplored] = useState([]);
  const [unexplored, setUnexplored] = useState([]);
  const [pointsData, setGraph] = useState([]);
  var hearts = [];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  const series: any[] = pointsData;

  const newGameRequest = () => {
    fetch('https://vercelsteller.vercel.app/newGame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ constID: "Cancer" })
    })
    .then(response =>
      response.json()
      .then(
        data => {
          setConstID(data.constID)
          setStart(data.start)
          setEnd(data.end)
          setLife(data.life)
          setPoints(data.point)
          setExplored(data.explored)
          setUnexplored(data.unexplored)
          setGraph(data.node)
        }
      )
    )
  }

  const reset = () => {
    setStart("")
    setEnd("");
    setLife(0);
    setPoints(0);
    setExplored([]);
    setUnexplored([])
    setGraph([])
    newGameRequest()

  }

  useEffect(
    () => newGameRequest(),
    []
  )

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://vercelsteller.vercel.app/guess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        { 
          "choice": inputValue,
            "constID": constId,
            "explored": explored,
            "unexplored": unexplored,
            "start": start,
            "end": end,
            "life": life
        }
      )
    })
    .then(response =>
      response.json()
      .then(
        data => {

          setLife(data.life)
          if(life == 0){
            alert("You died")
            reset()
          }else{
            if(data["msg"] == "Congratulations, You won!"){
              alert("Congratulations, You won!")
              reset()
            }else{
              alert(data["msg"])
            }
          }
          setExplored(data["explored"])
          setUnexplored(data["unexplored"])
        }
      )
    )
  };

  for(var x = -1; x < life; x+=1){
    hearts.push(
      <Heart style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
    )
  }
  for(var x = 0; x < (4 - life); x+=1){
    hearts.push(
      <HeartOff style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
    )
  }

  return (

    <div className="flex flex-col items-center justify-center">

      <h1 className="py-3 mt-4" style={{ fontSize: "24px" }}>Today, I'd like to go from
        <span style={{color:'#de89a1'}}> {start} </span> to <span style={{color:'#97d6cf'}}> {end} </span>
      </h1>

      <Card className="w-[550px]">
        <CardContent className="p-8">
          <ChartContainer config={chartConfig}>
          <LineChart width={500} height={500} className='flex w-full'>
            {/* <CartesianGrid strokeDasharray="3 3" style={{ display: 'none' }}/> */}
            <XAxis dataKey="x" style={{ display: 'none' }} allowDuplicatedCategory={false} />
            <YAxis dataKey="y" style={{ display: 'none' }} allowDuplicatedCategory={false} />
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            {series.map((s) => (
            <Line dataKey="y" data={s.data} type="monotone" dot={<CustomizedDot />} strokeDasharray="5 5" stroke="#979C98" name={s.name} key={s.name} />
              // <Line dataKey="y" data={s.data} type="monotone" dot={<CustomizedDot />} strokeWidth={3} strokeDasharray="5 5" name={s.name} key={s.name} />
            ))}
          </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <h1 className="pt-2 mb-1" style={{ fontSize: "20px" }}>This is <span style={{color:'#E8AF1B'}}>{constId}</span></h1>
      <h1 className="mb-3" style={{ fontSize: "15px" }}>Guess the name of the next star to move ahead and reach the end point</h1>

      <div className="flex flex-col items-center w-full max-w-sm mb-4">

        <form onSubmit={handleSubmit} className="flex items-center">
          <Input type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Guess any star..."
            className="w-full"
          />
          <Button variant="outline" size="lg" type="submit" className="ml-2">Guess</Button>
        </form>

        <div className="flex justify-center items-center mt-4">
          {hearts}
        </div>

      </div>
    </div>
  );
};

export default Heroes;


















// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Game from "./game";
// import  Reload from "@/components/new-game";
// import React, { useState, useEffect } from 'react';
// // import { Form } from "@/components/ui/form";
// import { Heart, HeartOff } from "lucide-react";


// const Heroes = () => {
//   const [points, setPoints] = useState(0);
//   const [life, setLife] = useState(0);
//   const [explored, setExplored] = useState([]);
//   const [unexplored, setUnexplored] = useState([]);
//   const [constID, setConstID] = useState("");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
//   const [message, setMessage] = useState("");
//   const [inputValue, setInputValue] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (start !== "" && end !== "") {
//       fetch('/guess', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           choice: inputValue,
//           constID: constID,
//           explored: explored,
//           unexplored: unexplored,
//           start: start,
//           end: end,
//           life: life
//         })
//       })
//       .then(response => response.json())
//       .then(data => {
//         setPoints(points + data.points);
//         setLife(data.life);
//         if (data.life < 1) {
//           alert("You Lost");
//         }
//         if (data.msg === "Congratulations, You won!") {
//           alert("Congratulations, You won!");
//         }
//         setExplored(data.explored);
//         setUnexplored(data.unexplored);
//         setMessage(data.msg);
//       });
//     } else {
//       alert("Please Start Game");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <h1 className="py-3 mt-4" style={{ fontSize: "24px" }}>Today, I'd like to go from
//         <span style={{color:'#de89a1'}}> Star 1</span> to <span style={{color:'#97d6cf'}}> Star 2</span>
//           </h1>
//         <Game />
//       <h1 className="pt-2 mb-1" style={{ fontSize: "20px" }}>This is <span style={{color:'#E8AF1B'}}>constellationName</span></h1>
//       <h1 className="mb-3" style={{ fontSize: "15px" }}>Guess the name of the next star to move ahead and reach the end point</h1>
//       <div className="flex flex-col items-center w-full max-w-sm mb-4">
//         <form onSubmit={handleSubmit} className="flex items-center">
//           <Input type="text"
//             value={inputValue}
//             onChange={(event) => setInputValue(event.target.value)}
//             placeholder="Guess any star..."
//             className="w-full"
//           />
//           <Button variant="outline" size="lg" type="submit" className="ml-2">Guess</Button>
//         </form>
//         <div className="flex justify-center items-center mt-4">
//           <HeartOff style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
//           <HeartOff style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
//           <Heart style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
//           <Heart style={{ color: 'red', fontSize: '24px' }} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heroes;
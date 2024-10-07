import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
// import { YouLost } from "@/components/alerts.tsx";
// import DropdownInput from 'react-dropdown-input';
import React, { useState, useEffect } from 'react';
import { Heart, HeartOff } from "lucide-react";
import CustomizedDot  from  "@/components/custom-dot";
import { LineChart, Line, XAxis, YAxis} from 'recharts';
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

const Heroes = () => {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = useState("");
  const [constId, setConstID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [life, setLife] = useState(0);
  const [, setPoints] = useState(0);
  const [explored, setExplored] = useState([""]);
  const [unexplored, setUnexplored] = useState([]);
  const [pointsData, setGraph] = useState([]);
  const hearts = [];
  const chartConfig = {
    desktop: {
      label: "Stars",
    },
  } satisfies ChartConfig

  const series: any[] = pointsData;

  const newGameRequest = () => {
    fetch('https://vercelsteller.vercel.app/newGame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ constID: "Cassiopeia" })
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

  const frameworks = [
    {
      value: "caph",
      label: "Caph",
    },
    {
      value: "schedar",
      label: "Schedar",
    },
    {
      value: "gammacassiopeiae",
      label: "Gamma Cassiopeiae",
    },
    {
      value: "ruchbah",
      label: "Ruchbah",
    },
    {
      value: "segin",
      label: "Segin",
    },
  ]

  const lineRender = () => {
  const renderList: React.JSX.Element[] = []

    series.map((s) => {
      if (explored.includes(s["data"][0]["name"].replace(" ", "").toLowerCase()) && explored.includes(s["data"][1]["name"].replace(" ", "").toLowerCase())) { // assuming you want to check if s.data is truthy
        renderList.push(
          <Line
            dataKey="y"
            data={s.data}
            type="monotone"
            dot={<CustomizedDot start={start} end={end}/>}
            strokeWidth={3}
            strokeDasharray=""
            name={s.name}
            key={s.name}
          />
        )
      }else{
        renderList.push(
          <Line
            dataKey="y"
            data={s.data}
            type="monotone"
            dot={<CustomizedDot end={end} start={start}/>}
            strokeWidth={3}
            strokeDasharray="5 5"
            name={s.name}
            key={s.name}
          />
        )
      }
    })

    return renderList
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
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
            alert("Game Over")
            reset()
          }else{
            if(data["msg"] == "Congratulations, You won!"){
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

  for(let x = -1; x < life; x+=1){
    hearts.push(
      <Heart style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
    )
  }
  for(let x = 0; x < (4 - life); x+=1){
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
            <XAxis dataKey="x" style={{ display: 'none' }} allowDuplicatedCategory={false} />
            <YAxis dataKey="y" style={{ display: 'none' }} allowDuplicatedCategory={false} />
            {lineRender()}
          </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <h1 className="pt-2 mb-1" style={{ fontSize: "20px" }}>This is <span style={{color:'#E8AF1B'}}>{constId}</span></h1>
      <h1 className="mb-3" style={{ fontSize: "15px" }}>Guess the name of the next star to move ahead and reach the end point&period;&period;&period;</h1>

      <div className="flex flex-col items-center w-full max-w-sm mb-4">

        <form onSubmit={handleSubmit} className="flex items-center">
          <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
      <Input
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      placeholder={
        inputValue
          ? frameworks.find((framework) => framework.value === inputValue)?.label
          : "Guess any star..."
      }
      className="w-[200px] justify-between"
      aria-expanded={open}
    />
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Guess any star..." />
          <CommandList>
            <CommandEmpty>No star found&period;</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setInputValue(currentValue === inputValue ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      inputValue === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
          <Button variant="outline" size="lg" type="submit" className="ml-2">Guess</Button>
        </form>
        <div className="flex justify-center items-center p-5 mb-5">
          {hearts}
        </div>
        <div>
          Get a Hint (1/3)
        <Skeleton className="h-6 w-[450px] mt-4" />
        <Skeleton className="h-6 w-[450px] mt-4" />
        <Skeleton className="h-6 w-[450px] mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
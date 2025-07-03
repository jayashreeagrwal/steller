import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ResponsiveContainer } from 'recharts';
import React, { useState, useEffect } from 'react';
import { Heart, HeartOff } from "lucide-react";
import CustomizedDot from "@/components/custom-dot";
import { LineChart, Line, XAxis, YAxis } from 'recharts';
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

// Define interfaces for your data structures
interface NodeData {
  x: number;
  y: number;
  name: string;
}

interface SeriesData {
  name: string;
  data: NodeData[];
}

const Heroes = () => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  const [constId, setConstID] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [life, setLife] = useState(0);
  const [, setPoints] = useState(0);
  const [explored, setExplored] = useState<string[]>([]); // Explicitly type as string array
  const [unexplored, setUnexplored] = useState<string[]>([]); // Explicitly type as string array
  const [pointsData, setGraph] = useState<SeriesData[]>([]); // Explicitly type as SeriesData array
  const hearts: React.JSX.Element[] = []; // Explicitly type hearts array

  const chartConfig = {
    desktop: {
      label: "Stars",
    },
  } satisfies ChartConfig;

  const series: SeriesData[] = pointsData; // Ensure series has the correct type

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
              setConstID(data.constID);
              setStart(data.start);
              setEnd(data.end);
              setLife(data.life);
              setPoints(data.point);
              setExplored(data.explored);
              setUnexplored(data.unexplored);
              setGraph(data.node);
            }
          )
      )
  }

  const reset = () => {
    setStart("");
    setEnd("");
    setLife(0);
    setPoints(0);
    setExplored([]);
    setUnexplored([]);
    setGraph([]);
    newGameRequest();
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
    const renderList: React.JSX.Element[] = []; // Explicitly type renderList
    series.map((s) => {
      // Add checks for data and name to ensure they exist before accessing properties
      const node1Name = s.data?.[0]?.name?.replace(" ", "").toLowerCase();
      const node2Name = s.data?.[1]?.name?.replace(" ", "").toLowerCase();

      if (node1Name && node2Name && explored.includes(node1Name) && explored.includes(node2Name)) {
        renderList.push(
          <Line
            dataKey="y"
            data={s.data}
            type="monotone"
            dot={<CustomizedDot cx={0} cy={0} payload={s.data[0]} start={start} end={end} />}
            strokeWidth={3}
            strokeDasharray=""
            name={s.name}
            key={s.name}
          />
        )
      } else {
        renderList.push(
          <Line
            dataKey="y"
            data={s.data}
            type="monotone"
            dot={<CustomizedDot cx={0} cy={0} payload={s.data[0]} end={end} start={start} />}
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

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => { // Explicitly type event
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
              setLife(data.life);
              if (data.life <= 0) { // Check data.life instead of local 'life' state, as state updates are asynchronous
                alert("Game Over");
                reset();
              } else {
                if (data["msg"] === "Congratulations, You won!") {
                  reset();
                } else {
                  alert(data["msg"]);
                }
              }
              setExplored(data["explored"]);
              setUnexplored(data["unexplored"]);
            }
          )
      )
  };

  for (let x = 0; x < life; x += 1) { // Changed -1 to 0 for consistency with how hearts are displayed
    hearts.push(
      <Heart key={`heart-on-${x}`} style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
    )
  }
  for (let x = 0; x < (4 - life); x += 1) {
    hearts.push(
      <HeartOff key={`heart-off-${x}`} style={{ color: 'red', fontSize: '24px', marginRight: '6px' }} />
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('/2.png')] md:bg-[url('/1.png')]">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="py-3 mt-0 text-lg sm:text-xl md:text-2xl text-center">
          Today, I'd like to go from
          <span style={{ color: '#de89a1' }}> {start} </span> to
          <span style={{ color: '#97d6cf' }}> {end} </span>
        </h1>

        <Card className="w-full max-w-[550px]">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  width={400}
                  height={240}
                  className="w-full h-auto"
                >
                  <XAxis dataKey="x" style={{ display: 'none' }} allowDuplicatedCategory={false} />
                  <YAxis dataKey="y" style={{ display: 'none' }} allowDuplicatedCategory={false} />
                  {lineRender()}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <h1 className="pt-2 mb-1 text-md sm:text-lg">
          This is <span style={{ color: '#E8AF1B' }}>{constId}</span>
        </h1>
        <h1 className="mb-3 text-sm sm:text-base text-center">
          Guess the name of the next star to move ahead and reach the end point...
        </h1>

        <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm mb-4">
          <form onSubmit={handleSubmit} className="flex items-center flex-wrap gap-2">
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
                  className="w-[200px]"
                  aria-expanded={open}
                />
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Guess any star..." />
                  <CommandList>
                    <CommandEmpty>No star found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setInputValue(currentValue === inputValue ? "" : currentValue);
                            setOpen(false);
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
            <Button variant="outline" size="lg" type="submit">
              Guess
            </Button>
          </form>

          <div className="flex justify-center items-center p-5">{hearts}</div>

          <div className="text-sm text-center">
            Get a Hint (1/3)
            <Skeleton className="h-6 w-full max-w-[450] mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded" />
            <Skeleton className="h-6 w-full max-w-[450] mt-4 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded" />
            <Skeleton className="h-6 w-full max-w-[450] mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Heroes;
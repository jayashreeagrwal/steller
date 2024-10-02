// "use client"

// import { TrendingUp } from "lucide-react"
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"

// export const description = "A linear line chart"

// const chartData = [
//   { month: "January", desktop: 186 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "April", desktop: 214 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig

// const Game = () => {
//     return (
//     <Card>
//       {/* <CardHeader>
//         <CardTitle>Line Chart - Linear</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader> */}
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <LineChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             {/* <CartesianGrid vertical={false} /> */}
//             {/* <XAxis
//               dataKey="month"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             /> */}
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Line
//               dataKey="desktop"
//               type="linear"
//               stroke="var(--color-desktop)"
//               strokeWidth={2}
//               dot={false}
//             />
//           </LineChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 font-medium leading-none">
//           how do i make this a closed shape
//           </div>
//         <div className="leading-none text-muted-foreground">
//         and assign more values to it
//         </div>
//       </CardFooter>
//     </Card>
// );
// };
// export default Game;

"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A linear line chart"

const series = [
  {
    name: 'Series 1',
    data: [
      { category: '0', value: 0 },
      { category: '1', value: 1 },
      { category: '2', value: 2 },
    ],
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const Game = () => {
    return (
    <Card className="w-[550px]">
      <CardContent className="p-4">
        <ChartContainer config={chartConfig}>
        <LineChart width={500} height={500} className='flex w-full'>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="category" type="number" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" /> */}
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          {series.map((s) => (
            <Line dataKey="value" data={s.data} />
          ))}
        </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
);
};
export default Game;
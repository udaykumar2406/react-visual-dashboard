
import React from "react";
import { 
    ResponsiveContainer,
    LineChart,
    Line, 
    XAxis, 
    YAxis,
    CartesianGrid,
    Legend, 
    Tooltip
   } from "recharts";

const  ldata = [
  {
    name : 'Product 1',
    cost : 400,
    profit :120,
    month: 'june'
  },
  {
    name : 'Product 2',
    cost : 650,
    profit :240,
    month: 'july'
  },
  {
    name : 'Product 3',
    cost : 250,
    profit :510,
    month: 'August'
  },
  {
    name : 'Product 4',
    cost : 700,
    profit :360,
    month: 'September'
  },
  {
    name : 'Product 5',
    cost : 500,
    profit :440,
    month: 'October'
  },
  {
    name : 'Product6',
    cost : 600,
    profit :720,
    month: 'November'
  }
]




export default function ChartOne() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={ldata} margin={{right:30}}>
          <CartesianGrid strokeDasharray="3,3"/>
          <Line dataKey="cost" stroke="red" activeDot={{r:8}}/>
          <Line dataKey="profit" stroke="blue" activeDot={{r:10}}/>
          <XAxis dataKey="name" interval={'preserveStartEnd'}/>
          <YAxis/>
          <Tooltip/>
          <Legend verticalAlign="bottom" height={36}/>
          {/* <Legend/> */}
        </LineChart>

      </ResponsiveContainer>
    
    </>
  );
}

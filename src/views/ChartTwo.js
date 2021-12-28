
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
    name : '10',
    cost : 700,
    profit :120,
    month: 'jan'
  },
  {
    name : '20',
    cost : 450,
    profit :240,
    month: 'feb'
  },
  {
    name : '30',
    cost : 550,
    profit :510,
    month: 'march'
  },
  {
    name : '40',
    cost : 250,
    profit :360,
    month: 'April'
  },
  {
    name : '60',
    cost : 350,
    profit :670,
    month: 'may'
  },
  {
    name : '70',
    cost : 300,
    profit :120,
    month: 'june'
  },
  {
    name : '80',
    cost : 800,
    profit :770,
    month: 'july'
  },
  {
    name : '90',
    cost : 600,
    profit :720,
    month: 'August'
  }, {
    name : '100',
    cost : 630,
    profit :820,
    month: 'September'
  }, {
    name : '110',
    cost : 300,
    profit :500,
    month: 'October'
  }, {
    name : '120',
    cost : 650,
    profit :820,
    month: 'November'
  }
]




export default function ChartTwo() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={ldata} margin={{right:10}}>
          {/* <CartesianGrid strokeDasharray="3,3"/> */}
          <Line type="monotone" dataKey="cost" stroke="#CC0099" activeDot={{r:8}}/>
          <Line type="monotone" dataKey="profit" stroke="#000D99" activeDot={{r:10}}/>
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis/>
          <Tooltip contentStyle={{backgroundColor:'#FFFFFFF'}}/>
          {/* <Legend/> */}
         <Legend verticalAlign="top" height={36}/> 
        </LineChart>

      </ResponsiveContainer>
    
    </>
  );
}

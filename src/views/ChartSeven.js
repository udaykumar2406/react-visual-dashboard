import React from 'react';
import { 
    ResponsiveContainer,
    BarChart,
    Bar, 
    XAxis, 
    YAxis,
    CartesianGrid,
    Legend, 
    Tooltip
   } from "recharts";
const data = [
    {
      "name": "Jan",
      "Online Sales": 4000,
      "Offline Sales": 2400
    },
    {
      "name": "Feb",
      "Online Sales": 3000,
      "Offline Sales": 8000
    },
    {
      "name": "Mar",
      "Online Sales": 7800,
      "Offline Sales": 9800
    },
    {
      "name": "Apr",
      "Online Sales": 5080,
      "Offline Sales": 4908
    },
    {
      "name": "May",
      "Online Sales": 1890,
      "Offline Sales": 4800
    }

  ]

const ChartSeven = () => {
  return (
    <div>
        <ResponsiveContainer width="100%" aspect={2}>
       <BarChart width={730} height={250} data={data}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend verticalAlign="top" height={36} />
  <Bar dataKey="Online Sales" fill="#00A3AD" />
  <Bar dataKey="Offline Sales" fill="#008578" />
</BarChart> 
</ResponsiveContainer>
      
    </div>
  )
}

export default ChartSeven

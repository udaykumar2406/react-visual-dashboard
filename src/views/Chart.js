import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const Chart = () => {
  const ldata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  
    {
      name: "Page G",
      uv: 5490,
      pv: 7300,
      amt: 2100,
    }
    
  ];

  return (
    <div>
      {/* <h1 className="sub-heading">Development Activity</h1> */}
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={ldata}
          width={50}
          height={600}
          margin={{ top: 5, right: 13, bottom: 10, left: 10 }}
        >
          {/*<CartesianGrid strokeDasharray="4 4"/>
               <XAxis dataKey="name" interval="preserveStartEnd" tickFormatter={(value)=>value + 
                "programming"}/>
              <YAxis/> */}
          <Tooltip contentStyle={{ backgroundColor: "#e6eaf0" }} />
          {/* activeDot works only if you give Tooltip then only  */}
          <Legend />
          {/* <Line  type="monotone" dataKey="uv" stroke="red" activeDot={{r:10}}></Line>
              <Line type="linear" dataKey="amt" stroke="green" activeDot={{r:5}}></Line> */}
          <Line dataKey="pv" stroke="blue" activeDot={{ r: 8 }}></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

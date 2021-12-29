// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 200,
    pv: 150,
  },
  {
    name: " FEB",
    uv: 280,
    pv: 250,
  },
  {
    name: "MAR",
    uv: 180,
    pv: 200,
  },
  {
    name: "APR",
    uv: 189,
    pv: 200,
  },
  {
    name: "MAY",
    uv: 123,
    pv: 143,
  },
  {
    name: "JUN",
    uv: 156,
    pv: 125,
  }
  ,
  {
    name: "JULY",
    uv: 226,
    pv: 250,
  },
  {
    name: "AUG",
    uv: 114,
    pv: 150,
  },
  {
    name: "SEP",
    uv: 221,
    pv: 134,
  },
  {
    name: "OCT",
    uv: 123,
    pv: 134,
  },
  {
    name: "NOV",
    uv: 259,
    pv: 300,
  },
  {
    name: "DEC",
    uv: 223,
    pv: 250,
  }
];

export default function App() {
  return (
    <BarChart
      width={600}
      height={220}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={12.5}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 15, right: 15 }} style={{fontSize:'9px'}} />
      <YAxis style={{fontSize:'9px'}} />
      <Tooltip />
      {/* <Legend /> */}
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#000099"/>
    </BarChart>
  );
}

import React from 'react'
import { PieChart,Pie, ResponsiveContainer ,Cell} from 'recharts';
const pdata = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  

const ChartFive = () => {
  return (
    <>
    <ResponsiveContainer width="100%" aspect={3}>
      <PieChart width={600} height={400}>
      <Pie
        data={pdata}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
     
    </PieChart>

    </ResponsiveContainer>    </>
  )
}

export default ChartFive

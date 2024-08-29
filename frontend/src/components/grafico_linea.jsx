import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraficoLinea = () => {
  const data = [
    {name: 'Page A', uv: 0, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 10000, pv: 200, amt: 4000},
    {name: 'Page C', uv: 0, pv: 4000,  amt: 34000},
    {name: 'Page D', uv: 3, pv: 400,  amt: 34000},
    {name: 'Page E', uv: 400, pv: 4040,  amt: 34000},
    {name: 'Page F', uv: 6000, pv: 4000,  amt: 34000},
    {name: 'Page G', uv: 0, pv: 10000,  amt: 34000}


    // más datos aquí
  ];

  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default GraficoLinea;



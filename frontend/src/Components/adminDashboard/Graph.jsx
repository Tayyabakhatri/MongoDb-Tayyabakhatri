import { color } from 'framer-motion';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const Graph = ({data}) => {
  return (
    <>
    <div className="bg-gray-600  p-6 rounded-2xl shadow-md w-full mt-6">
      <h2 className="text-xl text-white font-bold text-gray-800 mb-4">User Growth Over Time</h2>
      <ResponsiveContainer width="100%" height={300} >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fill: "white" }}/>
          <YAxis tick={{ fill: "white" }}/>
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default Graph

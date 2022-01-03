import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'java',
    weekly: 100,
    monthly: 200,
    amt: 4000,
  },
  {
    name: 'c',
    weekly: 500,
    monthly: 1398,
    amt: 2210,
  },
  {
    name: 'javascript',
    weekly: 2000,
    monthly: 9800,
    amt: 2290,
  },
  {
    name: 'React',
    weekly: 2780,
    monthly: 3908,
    amt: 2000,
  },
  {
    name: 'Node',
    weekly: 1890,
    monthly: 4800,
    amt: 2181,
  },
  {
    name: 'C++',
    weekly: 2390,
    monthly: 3800,
    amt: 2500,
  },
  {
    name: 'Ruby',
    weekly: 3490,
    monthly: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
 

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={700}
          height={320}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="monthly" fill="#8884d8" />
          <Bar dataKey="weekly" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
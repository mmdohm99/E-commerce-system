import React from 'react';
import './Chart.scss';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ aspect, title }) => {
  const data = [
    // { name: 'January', total: 3200 },
    // { name: 'February', total: 4000 },
    // { name: 'March', total: 5000 },
    // { name: 'April', total: 2000 },
    // { name: 'May', total: 3500 },
    // { name: 'May', total: 1500 },
    // { name: 'July', total: 2485 },
    { name: 'August', total: 4500 },
    { name: 'September', total: 3200 },
    { name: 'October', total: 6000 },
    { name: 'November', total: 5000 },
    { name: 'December', total: 7000 },
    { name: 'January', total: 4000 },
  ];
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

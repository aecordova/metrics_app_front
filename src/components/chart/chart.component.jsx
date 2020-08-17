import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from "recharts";
import "./chart.styles.scss";

const Chart = ({ data, children }) => (
  <div>
    <h3>{children}</h3>
    <BarChart
      barCategoryGap = '30%'
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Bar dataKey='total' fill="#8884d8" />
    </BarChart>
  </div>
);

export default Chart;

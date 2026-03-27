import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { dataPie } from "../assets/ChartData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function PiePage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Pie Chart</h1>

      {/* Chart */}
      <PieChart width={400} height={300}>
        <Pie
          data={dataPie}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {dataPie.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Information Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">About this chart:</h2>
        <p>
          The pie chart shows the proportion of each group in the total. Each slice
          represents a group's contribution as a percentage.
        </p>

        {/* Group / Category List */}
        <h3 className="font-semibold mt-4 mb-2">Groups:</h3>
        <ul className="list-disc list-inside">
          {dataPie.map((item, index) => (
            <li key={index} style={{ color: COLORS[index % COLORS.length] }}>
              {item.name} — {item.value}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PiePage;
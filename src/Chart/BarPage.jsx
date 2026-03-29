import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { dataBar } from "../assets/ChartData";

function BarPage() {
  return (
    <div className="p-6 dark:bg-gray-900">
      <h1 className="text-xl dark:text-gray-100 font-bold mb-4">Bar Chart</h1>

      {/* Chart */}
      <BarChart width={800} height={300} data={dataBar}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#359078" />
      </BarChart>

      {/* Information Section */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded">
        <h2 className="font-semibold dark:text-gray-100 mb-2">About this chart:</h2>
        <p className="dark:text-gray-100">
          The bar chart shows the comparison of different categories. Each bar
          represents the value of a category, making it easy to compare them visually.
        </p>

        {/* Group / Category List */}
        <h3 className="font-semibold  dark:text-gray-100 mt-4 mb-2">Groups / Categories:</h3>
        <ul className="list-disc dark:text-gray-100 list-inside">
          {dataBar.map((item, index) => (
            <li key={index} style={{ color: "#359078" }}>
              {item.name} — {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BarPage;
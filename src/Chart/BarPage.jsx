import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { dataBar } from "../assets/ChartData";

function BarPage() {
  return (
    <div className="p-4 md:p-14 dark:bg-gray-900">
      <h1 className="text-xl dark:text-gray-100 font-bold mb-4">
        Bar Chart
      </h1>

      {/* Chart */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[300px] sm:min-w-[500px] md:min-w-full h-[250px] sm:h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#359078" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Information Section */}
      <div className="mt-6 p-2 bg-gray-100 dark:bg-gray-900 rounded">
        <h2 className="font-semibold dark:text-gray-100 mb-2">
          About this chart:
        </h2>
        <p className="dark:text-gray-100">
          The bar chart shows the comparison of different categories.
        </p>

        <h3 className="font-semibold dark:text-gray-100 mt-4 mb-2">
          Groups / Categories:
        </h3>
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
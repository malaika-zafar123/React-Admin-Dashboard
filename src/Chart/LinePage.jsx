import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { dataLine } from "../assets/ChartData";

function LinePage() {
  return (
    <div className="p-6 md:p-14 dark:bg-gray-900">
      <h1 className="text-xl dark:text-gray-100 font-bold mb-4">
        Line Chart
      </h1>

      {/* Chart */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[300px] sm:min-w-[500px] md:min-w-full h-[250px] sm:h-[300px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line type="monotone" dataKey="Stoke" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Brand" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Information Section */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded">
        <h2 className="font-semibold mb-2 dark:text-gray-100">
          About this chart:
        </h2>
        <p className="dark:text-gray-100">
          The line chart shows the trends of Stoke and Brand over time.
          Each line represents one metric.
        </p>

        <h3 className="font-semibold mt-4 dark:text-gray-100 mb-2">
          Metrics:
        </h3>
        <ul className="list-disc dark:text-gray-100 list-inside">
          <li style={{ color: "#82ca9d" }}>
            Stoke — Represents number of stoke over time
          </li>
          <li style={{ color: "#ff7300" }}>
            Brand — Represents Brand over time
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LinePage;
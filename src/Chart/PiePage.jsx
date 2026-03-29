import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dataPie } from "../assets/ChartData";

const COLORS = ["#0088FE", "#359078", "#FFBB28", "#FF8042"];

function PiePage() {
  return (
    <div className="p-6 md:p-14 dark:bg-gray-900">
      <h1 className="text-xl dark:text-gray-100 font-bold mb-4">
        Pie Chart
      </h1>

      {/* Chart */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[400px] h-[250px] sm:h-[300px] md:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataPie}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label
              >
                {dataPie.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Information Section */}
      <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded">
        <h2 className="font-semibold dark:text-gray-100 mb-2">
          About this chart:
        </h2>
        <p className="dark:text-gray-100">
          The pie chart shows the proportion of each group in the total.
        </p>

        <h3 className="font-semibold dark:text-gray-100 mt-4 mb-2">
          Groups:
        </h3>
        <ul className="list-disc dark:text-gray-100 list-inside">
          {dataPie.map((item, index) => (
            <li
              key={index}
              style={{ color: COLORS[index % COLORS.length] }}
            >
              {item.name} — {item.value}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PiePage;
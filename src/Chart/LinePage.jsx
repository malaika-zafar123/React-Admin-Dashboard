import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { dataLine } from "../assets/ChartData";

function LinePage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Line Chart</h1>

      {/* Chart */}
      <LineChart width={800} height={300} data={dataLine}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        <Line type="monotone" dataKey="Stoke" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Brand" stroke="#ff7300" />
      </LineChart>

      {/* Information Section */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">About this chart:</h2>
        <p>
          The line chart shows the trends of  Stoke and Brand over time.
          Each line represents one metric. It's useful for analyzing changes and patterns.
        </p>

        {/* Group / Metric List */}
        <h3 className="font-semibold mt-4 mb-2">Metrics:</h3>
        <ul className="list-disc list-inside">
          <li style={{ color: "#82ca9d" }}>Stoke — Represents number of stoke over time</li>
          <li style={{ color: "#ff7300" }}>Brand — Represents Brand over time</li>
        </ul>
      </div>
    </div>
  );
}

export default LinePage;
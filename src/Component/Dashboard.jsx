import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartArrowDown,
  faEnvelope,
  faHouse
} from "@fortawesome/free-solid-svg-icons";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

import { dataLine, dataBar, dataPie } from "../assets/ChartData";

const COLORS = ["#22c55e", "#06b6d4", "#f59e0b", "#ef4444"];

function Dashboard() {
  return (
    <div className="p-6 space-y-6  dark:bg-[#0f172a] min-h-screen">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-[#359078]">
          Welcome to your dashboard
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card value="361" title="Emails Sent" icon={<FontAwesomeIcon icon={faEnvelope} />} />
        <Card value="225" title="Sales" icon={<FontAwesomeIcon icon={faBagShopping} />} />
        <Card value="441" title="Users" icon={<FontAwesomeIcon icon={faHouse} />} />
        <Card value="134" title="Orders" icon={<FontAwesomeIcon icon={faCartArrowDown} />} />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LINE CHART */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-lg">
          <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
            Revenue Generated
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Legend />

              
              <Line type="monotone" dataKey="Stoke" stroke="#06b6d4" />
              <Line type="monotone" dataKey="Brand" stroke="#f59e0b" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-lg">
          <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
            Pie Chart
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataPie}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {dataPie.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-white dark:bg-[#1e293b] p-4 rounded-2xl shadow-lg">
          <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
            Product Data
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />

              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>


      {/* TRANSACTIONS */}
    <div className="bg-white dark:bg-[#1e293b] p-8 rounded-2xl shadow-lg">
  <h2 className="font-semibold mb-4 text-gray-800 dark:text-white">
    Recent Transactions
  </h2>

  {/* Scrollable area */}
  <ul className="space-y-3 text-sm max-h-64 overflow-y-auto ">
    <li className="flex bg-gray-300 justify-between border-b-2 p-2">
      <span className="dark:text-gray-300">John Doe</span>
      <span className="text-gray-600 "> 2025-8-12</span>
      <span className="text-green-500">$43.95</span>
    </li>
    <li className="flex  bg-gray-300 dark:bg-gray-900 justify-between border-b-2 p-2">
      <span className="dark:text-gray-300">Jack</span>
      <span className="text-green-500">$133.45</span>
    </li>
    <li className="flex justify-between border-b-2 pb-4">
      <span className="dark:text-gray-300">Alex</span>
      <span className="text-green-500">$23.11</span>
    </li>
    <li className="flex justify-between border-b-2 pb-4">
      <span className="dark:text-gray-300">Jack</span>
      <span className="text-green-500">$133.45</span>
    </li>
    <li className="flex justify-between border-b-2 pb-4">
      <span className="dark:text-gray-300">Jack</span>
      <span className="text-green-500">$133.45</span>
    </li>
    <li className="flex justify-between border-b-2 pb-4">
      <span className="dark:text-gray-300">Jack</span>
      <span className="text-green-500">$133.45</span>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default Dashboard;
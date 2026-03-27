import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFolder,
  faCalendar,
  faChartColumn,
  faChartPie,
  faChartLine,
  faBars,
  faLayerGroup,
  faList
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-600 min-h-screen relative transition-all duration-500 ${toggleMenu ? "w-0" : "w-64"
          }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`absolute top-9 ${toggleMenu ? "left-6" : "left-56"
            } z-10 p-2 border border-blue-100 rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 transition-all duration-500`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Profile */}
        <div className="flex p-4 flex-col items-center">
          <img
            className="h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
          />
          <span className="text-white font-bold mt-2">John Deo</span>
          <p className="text-xs text-white">View Profile</p>
        </div>

        {/* Navigation */}
        <nav className="mt-5 flex flex-col px-2 space-y-2">

          {/* Dashboard */}
          <Link
            to="/"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faHouse} className="mr-3" /> Dashboard
          </Link>

          {/* Data Section */}
          <h3 className="px-3 text-xs font-semibold text-white uppercase mt-3">
            Data
          </h3>

          <Link
            to="/product"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="mr-3" /> Product
          </Link>
          <Link
            to="/details"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          ><FontAwesomeIcon icon={faList}  className="mr-3" /> Product Details
          </Link>
          <Link
            to="/reviews"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faFolder} className="mr-3" /> User Review
          </Link>

          {/* Pages */}
          <h3 className="px-3 text-xs font-semibold text-white uppercase mt-5">
            Pages
          </h3>

          <Link
            to="/calendar"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faCalendar} className="mr-3" /> Calendar
          </Link>

          <Link
            to="/contact"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faUser} className="mr-3" /> Contact Form
          </Link>

          {/* Charts */}
          <h3 className="px-3 text-xs font-semibold text-white uppercase mt-5">
            Charts
          </h3>

          <Link
            to="/bar"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faChartColumn} className="mr-3" /> Bar Chart
          </Link>

          <Link
            to="/pie"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faChartPie} className="mr-3" /> Pie Chart
          </Link>

          <Link
            to="/line"
            className="text-white flex items-center px-2 py-2 rounded-md hover:bg-white hover:text-black"
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-3" /> Line Chart
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
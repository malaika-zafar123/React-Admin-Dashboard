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
    <div className="flex min-h-full">
          
            {/* Toggle Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`absolute top-9 ${toggleMenu ? "left-6" : "left-56"
            } z-10 dark:text-gray-400 transition-all duration-500`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      {/* Sidebar */}
      <div
        className={`dark:bg-gray-900 bg-gray-100 sm:overflow-hidden border-r min-h-full relative transition-all overflow-hidden duration-500 ${toggleMenu ? "w-0" : "w-64"
          }`}
>
        {/* Profile */}
        <div className="flex p-4 flex-col items-center">
          <img
            className="h-20 w-20 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
          />
          <span className="text-2xl dark:text-gray-50 font-bold mt-2">John Deo</span>
          <p className="text-xl text-[#359078]">View Profile</p>
        </div>

        {/* Navigation */}
        <nav className="mt-5 flex flex-col px-2 space-y-2">

          {/* Dashboard */}
          <Link
            to="/"
            className=" flex items-center  px-2 py-2 rounded-md  text-blue-300"
          >
            <FontAwesomeIcon icon={faHouse} className="mr-3" /> Dashboard
          </Link>

          {/* Data Section */}
          <h3 className="px-3 text-xs dark:text-gray-300 font-semibold   uppercase mt-3">
            Data
          </h3>

          <Link
            to="/product"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md h  hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="mr-3" /> Product
          </Link>
          <Link
            to="/details"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md    hover:text-blue-300"
          ><FontAwesomeIcon icon={faList}  className="mr-3" /> Product Details
          </Link>
          <Link
            to="/reviews"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md    hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faFolder} className="mr-3" /> User Review
          </Link>

          {/* Pages */}
          <h3 className="px-3 text-xs dark:text-gray-100 font-semibold uppercase mt-5">
            Pages
          </h3>

          <Link
            to="/add"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md    hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faCalendar} className="mr-3" /> Add Product
          </Link>

          <Link
            to="/contact"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md    hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faUser} className="mr-3" /> Contact Form
          </Link>

          {/* Charts */}
          <h3 className="px-3 text-xs dark:text-gray-50 font-bold  uppercase mt-5">
            Charts
          </h3>

          <Link
            to="/bar"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md    hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faChartColumn} className="mr-3" /> Bar Chart
          </Link>

          <Link
            to="/pie"
            className=" flex items-center dark:text-gray-200 px-2 py-2 rounded-md    hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faChartPie} className="mr-3" /> Pie Chart
          </Link>

          <Link
            to="/line"
            className=" flex items-center px-2 dark:text-gray-200 py-2 rounded-md    hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-3" /> Line Chart
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
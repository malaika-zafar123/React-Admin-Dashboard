import React, { useState , useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faGear, faUser, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../Theme/ThemeContext"; 



function Navbar() {
const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="bg-white dark:bg-gray-900 px-4 py-3 shadow-md">
        <div className="container mx-auto flex justify-between items-center">

          {/* Search Bar */}
          <div className="relative w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-100 dark:bg-gray-700 outline-none  text-gray-900 dark:text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full pl-10 p-2"
              placeholder="Search..."
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition"
            >
              {darkMode ? (
                <FontAwesomeIcon icon={faSun} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faMoon} size="lg" />
              )}
            </button>

            {/* Notification */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faBell} size="lg" />
            </button>

            {/* Settings */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faGear} size="lg" />
            </button>

            {/* Profile */}
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
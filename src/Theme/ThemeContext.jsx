
import React, { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);


 useEffect(() => {
  const savedTheme = localStorage.getItem("darkMode");

  if (savedTheme === null) {
    setDarkMode(true); 
  } else {
    setDarkMode(savedTheme === "true");
  }
}, []);

 
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
 export default ThemeProvider;
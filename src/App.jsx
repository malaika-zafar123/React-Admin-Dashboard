import React from "react";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Dashboard from "./Component/Dashboard";
import LinePage from "./Chart/LinePage";
import BarPage from "./Chart/BarPage";
import PiePage from "./Chart/PiePage";
import AddProduct from "./Pages/AddProduct"
import ContactForm from "./Pages/ContactForm";
import ProductLogic from "./Pages/ProductLogic";
import { ThemeProvider } from "./Theme/ThemeContext";
import ProductDetails from "./Pages/ProductDetails";
import ReviewPage from "./Pages/ReviewPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider>

      <Router>
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="w-full min-h-screen dark:bg-gray-900">
            <Navbar />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/line" element={<LinePage />} />
              <Route path="/bar" element={<BarPage />} />
              <Route path="/pie" element={<PiePage />} />
               <Route path="/add" element={<AddProduct />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/product" element={<ProductLogic />} />
              <Route path="/details" element={<ProductDetails />} />
              <Route path="/reviews" element={<ReviewPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";

function DynamicRouting() {
  const getActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    margin: "1rem",
    color: isActive ? "red" : "",
  });

  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink style={getActiveStyle} to="/">
            Home
          </NavLink>
          ||
          <NavLink style={getActiveStyle} to="/category">
            Category
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default DynamicRouting;

import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

const BasicRoute = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home </Link> ||
        <Link to="/products"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRoute;

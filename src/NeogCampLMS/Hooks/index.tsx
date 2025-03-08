import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import { products } from "./products";
import Cart from "./Cart";
import Header from "./Header";

function UseContext() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default UseContext;

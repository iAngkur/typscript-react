import React, { useContext, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import { products } from "./products";
import Cart from "./Cart";
import CartContextComponent, { useCartContext } from "./CartContextProvider";

function UseContext() {
  const { items: cartItemCount } = useCartContext();

  return (
    <div>
      <h1>meKart</h1>
      <h3>Items in cart: {cartItemCount}</h3>

      <nav>
        <NavLink to="/"> Home </NavLink>
        ||
        <NavLink to="/cart"> Cart</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default UseContext;

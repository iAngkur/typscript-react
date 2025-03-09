import React from "react";
import { useCartContext } from "./CartContextProvider";
import { NavLink } from "react-router-dom";

function Header() {
  const { items } = useCartContext();

  const cartItems = new Set(items.map((item) => item.id));

  return (
    <div>
      <h1>myKart</h1>
      <h3>Items in cart: {cartItems.size}</h3>

      <nav>
        <NavLink to="/"> Home </NavLink>
        ||
        <NavLink to="/cart"> Cart</NavLink>
      </nav>
    </div>
  );
}

export default Header;

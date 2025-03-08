import React from "react";
import { useCartContext } from "./CartContextProvider";
import { NavLink } from "react-router-dom";

function Header() {
  const { items: cartItemCount } = useCartContext();

  return (
    <div>
      <h1>myKart</h1>
      <h3>Items in cart: {cartItemCount}</h3>

      <nav>
        <NavLink to="/"> Home </NavLink>
        ||
        <NavLink to="/cart"> Cart</NavLink>
      </nav>
    </div>
  );
}

export default Header;

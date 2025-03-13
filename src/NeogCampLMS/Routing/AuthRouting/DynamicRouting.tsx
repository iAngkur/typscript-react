import React, { useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Address from "../Address";
import Login from "../Login";
import RequiresAuth from "./RequiresAuth";
import { useLoginContext } from "./LoginContextProvider";

function DynamicRouting() {
  const getActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    margin: "1rem",
    padding: "0.5rem 1rem",
    color: isActive ? "white" : "",
    background: isActive ? "#222" : "none",
    textDecoration: "none",
    borderRadius: "5px",
  });

  const { isLoggedIn, setIsLoggedIn } = useLoginContext();

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#ccc",
          color: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginLeft: "1.5rem" }}>
            <NavLink style={getActiveStyle} to="/">
              Home
            </NavLink>
          </li>

          <li style={{ marginLeft: "1.5rem" }}>
            <NavLink style={getActiveStyle} to="/category">
              Category
            </NavLink>
          </li>

          <li style={{ marginLeft: "1.5rem" }}>
            <NavLink style={getActiveStyle} to="/address">
              Address
            </NavLink>
          </li>
          <li style={{ marginLeft: "1.5rem" }}>
            <button onClick={handleLogin}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />
        {/* {isLoggedIn && <Route path="/address" element={<Address />} />}
          {!isLoggedIn && <Route path="/address" element={<Login />} />} */}
      </Routes>
    </div>
  );
}

export default DynamicRouting;

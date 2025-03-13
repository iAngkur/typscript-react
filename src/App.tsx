import React from "react";
import Home from "./ReactComponents/Home";
import InfiniteScroll from "./ReactComponents/InfineScroll";
import OptimisticUpdate from "./ReactComponents/OptimisticUpdate";
import DebouncingControlledInput from "./ReactComponents/DebouncingControlledInput";
import PollingPattern from "./ReactComponents/PollingPattern";
import Modal from "./ReactComponents/Modal";
import FakeAPI from "./NeogCampLMS/FakeAPI";
import SearchArray from "./NeogCampLMS/SearchArray";
import Dropdown from "./NeogCampLMS/Dropdown";
import Dropdown_v2 from "./NeogCampLMS/Dropdown_v2";
import BasicRoute from "./NeogCampLMS/Routing/BasicRoute";
import DynamicRouting from "./NeogCampLMS/Routing/AuthRouting/DynamicRouting";
import UseContext from "./NeogCampLMS/Hooks";
import CartContextProvider from "./NeogCampLMS/Hooks/CartContextProvider";
import { BrowserRouter } from "react-router-dom";
import UseReducer from "./NeogCampLMS/Hooks/UseReducer";
import Index from "./NeogCampLMS/CSS/CssIndex";
import CssIndex from "./NeogCampLMS/CSS/CssIndex";
import LoginContextProvider from "./NeogCampLMS/Routing/AuthRouting/LoginContextProvider";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <InfiniteScroll /> */}
      {/* <OptimisticUpdate /> */}
      {/* <DebouncingControlledInput /> */}
      {/* <PollingPattern /> */}
      {/* <Modal /> */}
      {/* <FakeAPI /> */}
      {/* <SearchArray /> */}
      {/* <Dropdown /> */}
      {/* <Dropdown_v2 /> */}
      {/* <BasicRoute /> */}
      <BrowserRouter>
        <LoginContextProvider>
          <DynamicRouting />
        </LoginContextProvider>
      </BrowserRouter>
      {/* <BrowserRouter>
        <CartContextProvider>
          <UseContext />
        </CartContextProvider>
      </BrowserRouter> */}
      {/* <UseReducer /> */}
      {/* <CssIndex /> */}
    </div>
  );
}

export default App;

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
import DynamicRouting from "./NeogCampLMS/Routing/DynamicRouting";
import UseContext from "./NeogCampLMS/Hooks";
import CartContextProvider from "./NeogCampLMS/Hooks/CartContextProvider";
import { BrowserRouter } from "react-router-dom";
import UseReducer from "./NeogCampLMS/Hooks/UseReducer";

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
      {/* <DynamicRouting /> */}
      {/* <BrowserRouter>
        <CartContextProvider>
          <UseContext />
        </CartContextProvider>
      </BrowserRouter> */}
      <UseReducer />
    </div>
  );
}

export default App;

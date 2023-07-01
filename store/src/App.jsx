import { useState } from "react";
import React from "react";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import RootLayouts from "./RootLayouts/RootLayouts";
import FakeStoreApp from "./pages/FakeStoreApp";
import Storedetails  from "./pages/Storedetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Storedetails/:id" element={< Storedetails/>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

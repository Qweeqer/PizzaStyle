import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import ButtonAppBar from "./components/AppBarWithCartIcon/AppBarWithCartIcon";

import "./App.css";

const Pizzas = lazy(() => import("./page/Pizza/Pizza"));
const Cart = lazy(() => import("./page/Cart/Cart"));

const App = () => {
  return (
    <BrowserRouter basename="/PizzaStyle/">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ButtonAppBar />}>
            <Route index element={<Pizzas />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<Navigate to="/PizzaStyle/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import ButtonAppBar from "../components/AppBarWithCartIcon/AppBarWithCartIcon";

const Pizzas = lazy(() => import("../page/Pizza/Pizza"));
const Cart = lazy(() => import("../page/Cart/Cart"));
// const PageNotFound = lazy(() => import("../page/PageNotFound/PageNotFound"));
const PagesRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ButtonAppBar />
      <Routes>
        <Route path="/PizzaStyle/" element={<Pizzas />} />
        <Route path="/PizzaStyle/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/PizzaStyle/" />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;

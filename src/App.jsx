import { Route, Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import ButtonAppBar from "./components/AppBarWithCartIcon/AppBarWithCartIcon";
import Pizzas from "./page/Pizza/Pizza.jsx";
import Cart from "./page/Cart/Cart.jsx";
import PageNotFound from "./page/PageNotFound/PageNotFound.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes path="/PizzaStyle/" element={<ButtonAppBar />}>
          <Route index exact="true" element={<Pizzas />} />
          <Route path="/PizzaStyle/cart" element={<Cart />} />
          {/* <Route path="*" element={<Navigate to="/PizzaStyle/" />} /> */}
        </Routes>
        <Route path="*" element={<PageNotFound />} />
      </Suspense>
    </Router>
  );
}

export default App;

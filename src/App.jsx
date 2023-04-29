import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import ButtonAppBar from "./components/AppBarWithCartIcon/AppBarWithCartIcon";
import Pizzas from "./page/Pizza/Pizza.jsx";
import Cart from "./page/Cart/Cart.jsx";
import PageNotFound from "./page/PageNotFound/PageNotFound.jsx";
import RedirectHash from "./components/RedirectHash/RedirectHash";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/PizzaStyle">
      <RedirectHash />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<ButtonAppBar />}>
            <Route index element={<Pizzas />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

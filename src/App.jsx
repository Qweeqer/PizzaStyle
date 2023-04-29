import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import ButtonAppBar from "./components/AppBarWithCartIcon/AppBarWithCartIcon";
import Pizzas from "./page/Pizza/Pizza.jsx";
import Cart from "./page/Cart/Cart.jsx";
import PageNotFound from "./page/PageNotFound/PageNotFound.jsx";
import "./App.css";

function App() {
  return (
      <Suspense fallback={<Loader />}>
    <Routes>
        <Route path="/" element={<ButtonAppBar />}>
          <Route index exact="true" element={<Pizzas />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        </Route>
    </Routes>
      </Suspense>
  );
}

export default App;

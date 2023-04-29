import './App.css';
import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from './components/AppBarWithCartIcon/AppBarWithCartIcon';
import Pizzas from './page/Pizza/Pizza.jsx';
import Cart from './page/Cart/Cart.jsx';
import PageNotFound from "./page/PageNotFound/PageNotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ButtonAppBar />}>
        <Route index exact="true" element={<Pizzas />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

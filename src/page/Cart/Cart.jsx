import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";

import CartList from "../../components/CartList/CartList";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import s from "./Cart.module.css";
export default function CartPage() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return (
    <Container className={s.cartContainer}>
      {cart.length === 0 ? (
        <Typography variant="h3" align="center" >
          Please, choose pizza{" "}
          <Link to="/" className={s.linkToHome}>
            here
          </Link>
        </Typography>
      ) : (
        <>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <CartList />
          </Grid>
          <MakeOrder />
        </>
      )}
    </Container>
  );
}

import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


import { Box, Container, Grid, Typography } from "@mui/material";

import useAdjustMarginTop from "../../helpers/hooks/useAdjustMarginTop";
import { useRandomPizzaImage } from "../../helpers/hooks/useRandomPizzaImage";
import CartList from "../../components/CartList/CartList";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import s from "./Cart.module.css";

export default function CartPage() {
  const { randomPizzaImage, isLoading } = useRandomPizzaImage();
  
  const cart = useSelector((state) => state.pizzaStyle.cart);

  const cartTitleRef = useRef(null);
  useAdjustMarginTop(cartTitleRef, "header");

  const backgroundStyle = isLoading
    ? { backgroundColor: "rgba(255, 255, 255, 0.3)" }
    : { background: `url(${randomPizzaImage}) center center/cover no-repeat` };

  return (
    <Container className={s.cartContainer}>
      {cart.length === 0 ? (
        <Box className={s.cartBox} sx={backgroundStyle }>
          <Typography className={s.cartTitle} variant="h1" align="center">
            Please, choose pizza{" "}
            <Link to="/" className={s.linkToHome} aria-label="Go to main page">
              here
            </Link>
          </Typography>
        </Box>
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

CartPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  randomPizzaImage: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CartPage.defaultProps = {
  isLoading: false,
  randomPizzaImage: "",
  cart: [],
};

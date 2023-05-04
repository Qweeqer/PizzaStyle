import { useRef } from "react";
import { useSelector } from "react-redux";

import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";

import useAdjustMarginTop from "../../helpers/hooks/useAdjustMarginTop";
import Counter from "../Counter/Counter";
import s from "./CartList.module.css";

function Cart() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  const cartListBoxRef = useRef(null);
  useAdjustMarginTop(cartListBoxRef, "header");

  return (
    <Container ref={cartListBoxRef}>
      <Grid className={s.cartListGridContainer} container spacing={3}>
        {cart.map(({ id, title, description, price, image, quantity }) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Card className={s.card}>
                <Box className={s.imageContainer}>
                  <CardMedia
                    loading="lazy"
                    component="img"
                    className={s.cardMedia}
                    image={image}
                    alt={title}
                    title={title}
                  />
                </Box>
                <Box className={s.contentCardBox}>
                  <CardContent className={s.cardContent}>
                    <Typography
                      className={s.cardTitle}
                      variant="h6"
                      component="h3"
                    >
                      {title}
                    </Typography>
                    <Typography className={s.description} variant="body2">
                      {description}
                    </Typography>
                    <Typography className={s.description} variant="body1">
                      Total price for {quantity} pizzas: {price * quantity} UAH
                    </Typography>
                  </CardContent>

                  <Box className={s.cardActions}>
                    <Counter id={id} />
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Cart;

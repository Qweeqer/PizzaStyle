import { useSelector } from "react-redux";

import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Counter from "../Counter/Counter";
import s from "./PizzaItem.module.css";

export default function PizzaItem({ pizzas }) {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  return (
    <>
      {pizzas.map(({ id, title, description, price, image }) => {
        const isInCart = cart.some((item) => item.id === id);
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
                    Price: {price} UAH
                  </Typography>
                </CardContent>
                <Box className={s.cardActions}>
                  {isInCart ? <Counter id={id} /> : <AddToCartButton id={id} />}
                </Box>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

import Counter from "../Counter/Counter";
import { useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import s from "./CartList.module.css";

function Cart() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return cart.map(({ id, title, description, price, image, quantity }) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Card className={s.card}>
          <Box className={s.imageContainer}>
            <CardMedia
              component="img"
              className={s.cardMedia}
              image={image}
              alt={title}
              title={title}
            />
          </Box>
          <CardContent className={s.cardContent} sx={{ height: 100 }}>
            <Typography className={s.cardTitle} variant="h6" component="h3">
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
        </Card>
      </Grid>
    );
  });
}

export default Cart;

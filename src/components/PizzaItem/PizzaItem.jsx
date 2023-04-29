import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Counter from "../Counter/Counter";
import { useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
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
              <CardMedia
                className={s.cardMedia}
                image={image}
                alt={title}
                title={title}
              />
              <CardContent className={s.cardContent} sx={{ height: 100 }}>
                <Typography className={s.cardTitle} variant="h6" component="h3">
                  {title}
                </Typography>
                <Typography className={s.description} variant="body2">
                  {description}
                </Typography>
                <Typography className={s.description} variant="body1">
                  Price: {price} UAH
                </Typography>
              </CardContent>
              <CardActions className={s.cardActions}>
                {isInCart ? <Counter id={id} /> : <AddToCartButton id={id} />}
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}

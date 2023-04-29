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
function Cart() {
  const cart = useSelector((state) => state.pizzaStyle.cart);

  return cart.map(({ id, title, description, price, image, quantity }) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={id}>
        <Card
          sx={{
            height: "100%",
            "&:hover": { boxShadow: "0px 10px 13px -7px #000000" },
          }}
        >
          <CardMedia
            image={image}
            alt={title}
            title={title}
            sx={{
              height: 400,
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
          <CardContent sx={{ height: 100 }}>
            <Typography variant="h6" component="h3">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body1">
              Total price for {quantity} pizzas: {price * quantity} UAH
            </Typography>
          </CardContent>
          <Box>
            <Counter id={id} />
          </Box>
        </Card>
      </Grid>
    );
  });
}

export default Cart;

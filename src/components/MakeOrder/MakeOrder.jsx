import { useDispatch, useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";

import { makeOrder } from "../../redux/pizzaSlice";
import Button from "../Button/Button";
import s from "./MakeOrder.module.css";

export default function MakeOrder() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizzaStyle.cart);

  const totalSum = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const canMakeOrder = cart.length > 0;

  const handleMakeOrder = () => {
    if (canMakeOrder) {
      dispatch(makeOrder());
    }
  };

  return (
    <Box className={s.orderBox}>
      <Typography variant="h5">Total Sum: {totalSum} UAH</Typography>
      <Box className={s.orderButtonBox}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleMakeOrder}
          disabled={!canMakeOrder}
          aria-label="Make an order button"
        >
          Make an order
        </Button>
        {!canMakeOrder && (
          <Typography color="error">
            Add items to cart to place an order.
          </Typography>
        )}
      </Box>
    </Box>
  );
}


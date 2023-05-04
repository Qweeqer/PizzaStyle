import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Box } from "@mui/material";

import { addToCart, remove, removeFromCart } from "../../redux/pizzaSlice";
import Button from "../Button/Button";
import s from "./Counter.module.css";

function Counter({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const count = cart.find((item) => item.id === id);
  const quantity = count ? count.quantity : 0;
  const canRemove = quantity >= 1;

  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  const handleIncrement = () => {
    handleAddToCart();
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(remove(id));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box className={s.counterBox}>
      {quantity > 0 ? (
        <Box className={s.counterButtonBox}>
          <Button onClick={handleDecrement} aria-label="Reduce Quantity">
            -
          </Button>
          <span>{quantity}</span>
          <Button onClick={handleIncrement} aria-label="Increase Quantity">
            +
          </Button>
        </Box>
      ) : (
        <Button onClick={handleIncrement} aria-label="Add to Cart">
          Add to Cart
        </Button>
      )}
      {canRemove && (
        <Button onClick={handleRemove} aria-label="Remove from Cart">
          Remove
        </Button>
      )}
    </Box>
  );
}

Counter.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Counter;

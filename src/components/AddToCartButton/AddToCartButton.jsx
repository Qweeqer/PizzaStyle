import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

import { addToCart } from "../../redux/pizzaSlice";
import Button from "../Button/Button";
import s from "./AddToCartButton.module.css";

function AddToCartButton({ id }) {
  const dispatch = useDispatch();
  const add = () => dispatch(addToCart(id));
  return (
    <Box className={s.addToCartBox}>
      <Button onClick={add} aria-label="Add to Cart">
        Add to cart
      </Button>
    </Box>
  );
}

AddToCartButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default AddToCartButton;

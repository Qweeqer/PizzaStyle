import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/pizzaSlice";
import Button from "../Button/Button";
import { Box } from "@mui/material";
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

export default AddToCartButton;

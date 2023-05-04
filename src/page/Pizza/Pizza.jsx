import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";

import PizzaItem from "../../components/PizzaItem/PizzaItem";
import CenteredTitleImage from "../../components/CenteredTitleImage/CenteredTitleImage";
import s from "./Pizza.module.css";

export default function Pizzas() {
  const pizzas = useSelector((state) => state.pizzaStyle.pizzas);
  return (
    <>
      <CenteredTitleImage />
      <Container className={s.pizzaListContainer}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <PizzaItem pizzas={pizzas} />
        </Grid>
      </Container>
    </>
  );
}

PizzaItem.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
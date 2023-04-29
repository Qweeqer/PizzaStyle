import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import PizzaItem from "../../components/PizzaItem/PizzaItem";
import CenteredTitleImage from "../../components/CenteredTitleImage/CenteredTitleImage";

export default function Pizzas() {
  const pizzas = useSelector((state) => state.pizzaStyle.pizzas);
  return (
    <Container>
        <CenteredTitleImage />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <PizzaItem pizzas={pizzas} />
      </Grid>
    </Container>
  );
}

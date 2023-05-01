import { useSelector } from "react-redux";
import { AppBar, Badge, Typography, Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import Logo from "../Logo/Logo";
import s from "./AppBarWithCartIcon.module.css";


export default function AppBarWithCartIcon() {
  const cart = useSelector((state) => state.pizzaStyle.cart);
  const cartSum = cart.reduce((acc, curr) => acc + curr.quantity, 0);
const totalSum = cart.reduce(
  (acc, curr) => acc + curr.price * curr.quantity,
  0
);
  return (
    <>
      <AppBar
        className={s.appBar}
        position="static"
        sx={{
          marginBottom: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Box
          className={s.appBarBox}
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Logo />
          <NavLink
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            exact="true"
            to="/"
          >
            <Typography className={s.logoTitle} variant="p" body1="span">
              PizzaStyle
            </Typography>
          </NavLink>
        </Box>
        <NavLink
          id="cart"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          to="/cart"
          style={{ marginRight: "20px" }}
        >
          <Typography>
            <Badge className={s.badge} color="secondary" badgeContent={cartSum}>
              <ShoppingCart className={s.cartIcon} />
              <Typography variant="p" body1="span" className={s.cartSum}>
                <Typography
                  variant="p"
                  body1="span"
                  className={s.cartSumNumber}
                >
                  {totalSum}
                </Typography>{" "}
                UAH
              </Typography>
            </Badge>
          </Typography>
        </NavLink>
      </AppBar>
      <Outlet />
    </>
  );
}

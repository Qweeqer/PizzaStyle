import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { AppBar, Badge, Typography, Box } from "@mui/material";
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AppBar className={s.appBar}>
        <Box
          className={s.appBarBox}
          sx={{
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
            aria-label="Home page PizzaStyle"
          >
            <Typography className={s.logoTitle} variant="p" body1="span">
              PizzaStyle
            </Typography>
          </NavLink>
          <NavLink
            id="cart"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            to="/cart"
            style={{ marginRight: "20px" }}
            aria-label="Cart page"
          >
            <Typography>
              <Badge
                className={s.badge}
                color="secondary"
                badgeContent={cartSum}
              >
                <ShoppingCart className={s.cartIcon} aria-label="Cart icon" />
                <Typography variant="p" body1="span" className={s.cartSum}>
                  {windowWidth > 375 && (
                    <>
                      <Typography
                        variant="p"
                        body1="span"
                        className={s.cartSumNumber}
                      >
                        {totalSum}
                      </Typography>{" "}
                      UAH
                    </>
                  )}
                </Typography>
              </Badge>
            </Typography>
          </NavLink>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
}

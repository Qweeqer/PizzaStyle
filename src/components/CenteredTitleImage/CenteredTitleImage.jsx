import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

import backgroundImage from "../../images/backgroundImage.jpg";
import s from "./CenteredTitleImage.module.css";

const CenteredTitleImage = () => {

  const heroBoxRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector("header");
    console.log('header', header); //null
    if (header && heroBoxRef.current) {
      const headerHeight = header.offsetHeight;
      heroBoxRef.current.style.marginTop = `calc(${headerHeight}px + 0rem)`;
    }
  }, []);

  return (
    <Box
      ref={heroBoxRef}
      className={s.heroBox}
      sx={{
        background: `url(${backgroundImage}) center center/cover no-repeat`,
      }}
    >
      <Typography className={s.heroTitle} variant="h1">
        Welcome to PizzaStyle
      </Typography>
    </Box>
  );
};

export default CenteredTitleImage;

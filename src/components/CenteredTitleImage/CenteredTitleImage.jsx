import { useRef } from "react";

import { Box, Typography } from "@mui/material";

import useAdjustMarginTop from "../../helpers/hooks/useAdjustMarginTop";
import backgroundImage from "../../images/backgroundImage.jpg";
import s from "./CenteredTitleImage.module.css";

const CenteredTitleImage = () => {
  const heroBoxRef = useRef(null);

  useAdjustMarginTop(heroBoxRef, "header");

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

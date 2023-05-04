import { useRef, useState } from "react";

import { Box, Typography } from "@mui/material";

import useAdjustMarginTop from "../../helpers/hooks/useAdjustMarginTop";
import backgroundImage from "../../images/backgroundImage.jpg";
import s from "./CenteredTitleImage.module.css";

const CenteredTitleImage = () => {
  const heroBoxRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useAdjustMarginTop(heroBoxRef, "header");

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const backgroundStyle = isLoading
    ? { backgroundColor: "rgba(168,255,147,255)" }
    : { background: `url(${backgroundImage}) center center/cover no-repeat` };
  
  return (
    <Box ref={heroBoxRef} className={s.heroBox} sx={backgroundStyle}>
      <Typography className={s.heroTitle} variant="h1">
        Welcome to PizzaStyle
      </Typography>
      <img
        src={backgroundImage}
        alt="Background"
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default CenteredTitleImage;

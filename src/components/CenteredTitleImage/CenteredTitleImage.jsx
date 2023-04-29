import { Box, Typography } from "@mui/material";
import backgroundImage from "../../images/backgroundImage.jpg";
import s from "./CenteredTitleImage.module.css";

const CenteredTitleImage = () => {
  return (
    <Box
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

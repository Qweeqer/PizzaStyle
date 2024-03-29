import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import Button from "../../components/Button/Button";
import s from "./PageNotFound.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Box className={s.container}>
      <Box className={s.background}>
        <h2 className={s.title}>Вибачте, але тут немає Піци</h2>
        <Box className={s.img}></Box>
        <Button onClick={handleBtnClick}>Повернутись до Піци</Button>
        <p className={s.text}>
          Піца є дуже популярною стравою по всьому світу і може бути приготована
          в різних стилях та варіаціях, включаючи класичні піци або маргариту, а
          також вегетаріанські, м'ясні, грибні, морські та інші види. І
          відповідно до особистих уподобань та смакових вподобань, смак піци
          може бути різним, але загалом вона зазвичай сприймається як дуже
          смачна та задовольняюча страва.
        </p>
      </Box>
    </Box>
  );
};

export default PageNotFound;

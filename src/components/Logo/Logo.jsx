import { Link } from "react-router-dom";

import logo from "../../images/logopizza.jpg";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={s.link}>
      <img className={s.logo} src={logo} alt="logo" />
      
    </Link>
  );
};

export default Logo;

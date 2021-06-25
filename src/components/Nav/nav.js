import classes from "./nav.module.css";
import Logo4 from "../../assets/Vectordrop.svg";
const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="#" className={classes.hidden}> About </a>
        </li>
        <li>
          <a href="#"className={classes.hidden}> Products </a>
        </li>
        <li>
          <a href="#"className={classes.hidden}> Pricing </a>
        </li>
        <li>
          <a href="#"className={classes.hidden}> Blog </a>
        </li>
        <li>
          <a href="#"className={classes.hidden}> Jobs </a>
        </li>
        <li>
          <a href="#"> More <span> <img src={Logo4} alt="drop"></img> </span> </a>
        </li>
      </ul>
      
      
    </nav>
  );
};

export default Navigation;

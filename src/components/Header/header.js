import Logo from "../../assets/Dark.svg";
import Log1 from "../../assets/Google Play Badge.svg";
import Log2 from "../../assets/App Store Badge.svg";
import Navigation from "../Nav/nav";
import classes from "./header.module.css";



const Header = () => {
   return (
       
    <header className={classes.header}>
      <div className={classes.header_container}>
      
        <a href="#"><img src={Logo} alt="Logo" /></a>
        <Navigation />
              <div className={classes.icons}>
              <a href ="#" className={classes.logoicon}>
                <img src={Log1} alt="google" />
                </a>
                <a href="#2" className={classes.logoicon}>
                <img src={Log2} alt="app" />
              </a>
              </div>
      </div>
    </header>
  );
};

export default Header;
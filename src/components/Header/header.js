import Logo from "../../assets/Dark.svg";
import Logo1 from "../../assets/Google Play Badge.svg";
import Logo2 from "../../assets/App Store Badge.svg";
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
                <img src={Logo1} alt="google" />
                </a>
                <a href="#2" className={classes.logoicon}>
                <img src={Logo2} alt="app" />
              </a>
              </div>
      </div>
    </header>
  );
};

export default Header;
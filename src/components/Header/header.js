import Logo from "../../assets/Dark.svg";
import Logo1 from "../../assets/Google Play Badge.svg";
import Logo2 from "../../assets/App Store Badge.svg";
import Navigation from "../Nav/nav";
import classes from "./header.module.css";



const Header = () => {
   return (
       
    <header className={classes.header}>
      <div className={classes.header_container}>
      
        <img src={Logo} alt="Logo" />
        <Navigation />
              <a href ="#">
                <img src={Logo1} alt="google" />
                </a>
                <a href="#2">
                <img src={Logo2} alt="app" />
              </a>
      </div>
    </header>
  );
};

export default Header;
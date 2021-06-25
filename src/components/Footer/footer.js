import classes from "./footer.module.css";
import LogoF from "../../assets/footlogo.svg";
import Logo1 from "../../assets/Google Play Badge.svg";
import Logo2 from "../../assets/App Store Badge.svg";

const Footer = () => {
    return (
        <div className={classes.footercontainer}>
            <div className={classes.footcontain}>
                <div className={classes.leftdetails}>
                    <div className={classes.footlogo}>
                        <img src={LogoF} alt="icon"/>
                    </div>
                    <div className={classes.footnav}>
                        <ul>
                            <li><a href="#"> Download </a></li>
                            <li><a href="#"> License </a></li>
                        </ul>
                        <nav className={classes.footernav}>
                            <ul>
                                <li><a href="#">About </a></li>
                                <li><a href="#"> Features </a></li>
                                <li><a href="#"> Pricing </a></li>
                                <li><a href="#"> Careers </a></li>
                                <li><a href="#"> Help </a></li>
                                <li><a href="#"> Privacy Policy </a></li>
                            </ul>
                            <h6>© 2020 Landify UI Kit. All rights reserved</h6>
                        </nav>
                    </div>                  
                </div> 
            </div>      
            <div className={classes.footerimg}>
                <p>Get the App</p>
                <a href ="#">
                <img src={Logo1} alt="google" />
                </a>
                <a href="#2">
                <img src={Logo2} alt="app" />
                </a>

            </div>
        </div> 
    );
}
 
export default Footer;
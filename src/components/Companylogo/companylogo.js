import airbnb from "../../assets/Airbnb Logo.svg";
import hubspot from "../../assets/Hubspot Logo.svg";
import google from "../../assets/Google Logo.svg";
import microsoft from "../../assets/Microsoft Logo.svg";
import walmart from "../../assets/Walmart Logo.svg";
import fedex from "../../assets/FedEx Logo.svg";
import classes from "./companylogo.module.css";

const Companylogo = () => {
    return (
        <div className={classes.complogo}>
            <div className={classes.complog}>
           <a href="#"> <img src={airbnb} alt="air" /></a>
           <a href="#"> <img src={hubspot} alt="hub" /></a>
           <a href="#"><img src={google} alt="google" /></a>
           <a href="#"><img src={microsoft} alt="micro" /></a>
           <a href="#"><img src={walmart} alt="win" /></a>
           <a href="#"><img src={fedex} alt="fed" /></a>

            


            </div>
            
        </div>

    ); 
};
 
export default Companylogo;
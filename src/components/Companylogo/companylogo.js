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
            <img src={airbnb} alt="air" />
            <img src={hubspot} alt="hub" />
            <img src={google} alt="google" />
            <img src={microsoft} alt="micro" />
            <img src={walmart} alt="win" />
            <img src={fedex} alt="fed" />


            </div>
            
        </div>

    ); 
};
 
export default Companylogo;
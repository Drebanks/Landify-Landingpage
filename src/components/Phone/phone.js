import classes from "./phone.module.css";
import Phonex from "../../assets/iPhone X.png";
import Get from "../../assets/Button.svg";


const Phone = () => {
    return ( 
        <div className={classes.phoneflex}>
                <div className={classes.fone}>
                    <img src={Phonex} alt="phonex"/>
                </div>
                <div className={classes.headlines}>
                    <h3>Headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                    <a href="#4"> <img src={Get} alt="get"/></a> 
                </div>
        </div>

    );
}
 
export default Phone;
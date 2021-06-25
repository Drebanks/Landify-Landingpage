import classes from "./enter.module.css";
import Bulb from "../../assets/Cover Image.png";


const Enter = () => {
    return ( 
        <div className={classes.container}>
            <div className={classes.enter}>
                <div className={classes.ent}>
                    <h3>Enter the world of all fashion trends</h3>
                </div>
                <div className={classes.allow}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.</p>
                </div>
            </div>
            <div className={classes.bub}>
                <img src={Bulb} alt="image"/>
            </div>
        </div>
     );
}
 
export default Enter;
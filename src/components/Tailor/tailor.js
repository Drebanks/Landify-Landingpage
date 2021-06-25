import classes from "./tailor.module.css";
import One from "../../assets/one.svg";
import Two from "../../assets/two.svg";
import Three from "../../assets/three.svg";
import Four from "../../assets/four.svg";
import Five from "../../assets/five.svg";
import Six from "../../assets/six.svg";

const Tailor = () => {
    return (
            
        <div className={classes.tailorcontainer}>
            <div className={classes.tailorcontent}>
                <h2>Tailor-made features</h2>
                <p>Lorem ipsum is common placeholder text used to demonstrate<br></br> the graphic elements of a document or visual presentation. </p>
            </div>
            <div className={classes.tail}>
                <div className={classes.box}>
                    <img src={One} alt="for" />
                    <h5>Robust workflow</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className={classes.box}>
                    <img src={Two} alt="two" />
                    <h5>Flexibility</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className={classes.box}>
                    <img src={Three} alt="three" />
                    <h5>User friendly</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className={classes.box}>
                    <img src={Four} alt="four" />
                    <h5>Multiple layouts</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className={classes.box}>
                    <img src={Five} alt="five" />
                    <h5>Better components</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>
                <div className={classes.box}>
                    <img src={Six} alt="six" />
                    <h5>Well organised</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Sed erat nibh tristique ipsum.</p>
                </div>

            </div>
          
        </div>       
    );
};
 
export default Tailor;
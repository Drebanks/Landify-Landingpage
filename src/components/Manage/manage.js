import Logo1 from "../../assets/Google Play Badge.svg";
import Logo2 from "../../assets/App Store Badge.svg";
import classes from "./manage.module.css";
import Phone1 from "../../assets/Phone Mockup 1.png";
import Phone2 from "../../assets/Phone Mockup 2.png";

const Manage = () => {
    return (
        <div className={classes.mancontainer}>
            <div className={classes.man}>
                <h3>Manage your projects from your mobile</h3>
                <p>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
                
                <div className={classes.app}>
                    <h6>Get the App</h6>
                    <div className={classes.log}>
                        <a href ="#">
                        <img src={Logo1} alt="google" />
                     </a>
                     <a href="#2">
                         <img src={Logo2} alt="app" />
                     </a>
                    </div>
                </div>

            </div>
            <div className={classes.manimage}>
                <img src={Phone1} className={classes.main} alt="pho"/>
                <img src={Phone2}  alt="one"/>
            </div>
        </div>


    );
}
 
export default Manage;
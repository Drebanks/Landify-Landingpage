import classes from "./achievement.module.css";
import One from "../../assets/one.svg";
import Four from "../../assets/four.svg";
import Five from "../../assets/five.svg";
import Seven from "../../assets/seven.svg";





const Achievement = () => {
    return (
        <div className={classes.word}>
            <div className={classes.our}>
                <h3>Our 18 years of <br></br> achievements</h3>
                <h6>With our super powers we have reached this</h6>
            </div>
            <div className={classes.iconrow}>
            <div className={classes.icon}>
                <div className={classes.down}>
                    <img src={One} alt="one"/>
                </div>                  
                    <div className={classes.subnum}>  
                        <h4>10,000</h4>
                        <p>Downloads per day</p>                   
                    </div>                    
            </div>
            <div className={classes.icon}>
                <div className={classes.down}>
                    <img src={Four} alt="four"/>
                </div>                  
                    <div className={classes.subnum}>  
                        <h4>2 Million</h4>
                        <p>Users</p>                   
                    </div>                    
            </div>
            <div className={classes.icon}>
             <div className={classes.down}>
                    <img src={Five} alt="five"/>
                </div>                  
                    <div className={classes.subnum}>  
                        <h4>500+</h4>
                        <p>Clients</p>                   
                    </div>
                                    
            </div>
            <div className={classes.icon}>
                <div className={classes.down}>
                    <img src={Seven} alt="seven"/>
                </div>                  
                    <div className={classes.subnum}>  
                        <h4>140</h4>
                        <p>Countries</p>                   
                    </div>                    
            </div>
                
               

        </div>
            
            
            
            
    </div>
       



    );
};
export default Achievement;
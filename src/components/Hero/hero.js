import Phone from "../../assets/Phone Mockup.png";
import classes from "./hero.module.css";
import Header from "../Header/header";

const Hero = () => {
    return (
      <div className={classes.banner}>
          <Header />
        <div className={classes.container}>
          <div className={classes.content}>
            <h1> Organise Projects. <br></br> Get more done. </h1>
            <a href="#e" className={classes.btn}>Get started</a>
          </div>
          {/* <div className={classes.btn}>
          </div> */}

         
         
  
          <div className={classes.phone}>
            <img src={Phone} alt="topup" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
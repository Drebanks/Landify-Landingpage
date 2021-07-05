import classes from "./nav.module.css";
import Logo4 from "../../assets/Vectordrop.svg";
import ReactDom from "react-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";



const FaBars =  () => < FontAwesomeIcon icon = {faBars} />
const Navigation = () => {

//   function = () => {
//     const toggleButton = document.getElementsByClassName ("toogelebutton"){0}
// const navbar links = document.getElementsByClassName(navbar-link){0}

// toggleButton.addEventListener ("Click", () =>) {
//   navbarlink.classList.toggle("active")
// } 
//   }

  return (
    <nav className={classes.nav}>
          <a href="#" className={classes.togglebutton}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
        <ul>
          <li><a href="#" className={classes.hidden}> About </a></li>
          <li><a href="#"className={classes.hidden}> Products </a></li>
          <li><a href="#"className={classes.hidden}> Pricing </a></li>
          <li><a href="#"className={classes.hidden}> Blog </a></li>
          <li><a href="#"className={classes.hidden}> Jobs </a></li>
          <li><a href="#"> More <span> <img src={Logo4} alt="drop"></img> </span> </a></li>
        </ul>  
      <div className={classes.fab}>
        {/* <FaBars /> */}       
      </div>
    </nav>
    
    

  );
};

export default Navigation;


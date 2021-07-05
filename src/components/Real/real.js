import Num from "../../assets/Quote Mark.svg";
import classes from "./real.module.css";
import Hubspot from "../../assets/Hubspot Logo.svg";
import Airbnb from "../../assets/Airbnb Logo.svg";
import Book from "../../assets/BookMyShow Logo.svg";

const Real = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.first}>
        <div className={classes.realcontainer}>
          <div class="real">
            <div className={classes.sixsix}>
              <img src={Num} alt="fig66" />
            </div>
            <div className={classes.realtext}>
              <p>Real Stories from <br/> Real Customers</p>
              <h6>Get inspired by these stories.</h6>
            </div>
          </div>

          <div className={classes.hub}>
            <div className={classes.hubimg}>
              <img src={Hubspot} alt="hub"/>
            </div>
            <div className={classes.set}>
              <img src={Num} className={classes.set} alt="fig66" />
            </div>
            <div className={classes.par}>
              <p>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p>
              <h5>Floyd Miles</h5>
              <h6>Vice President, GoPro</h6>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.left}>
        <div className={classes.airbnbtext}>
          <div className={classes.hubimg}>
            <img src={Airbnb} alt="hub"/>
          </div>
          <div className={classes.set}>
            <img src={Num} className={classes.set} alt="fig66" />
          </div>
          <div className={classes.par}>
            <p> I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p>
            <h5>Jane Cooper</h5>
            <h6>CEO, Airbnb</h6>
          </div>
        </div>

        <div className={classes.bookcontent}>
          <div className={classes.bookimg}>
            <img src={Book} alt="hub"/>
          </div>
          <div className={classes.set}>
            <img src={Num} className={classes.set} alt="fig66" />
          </div>
          <div className={classes.par}>
            <p>Landify saved our time in designing my company page.</p>
            <h5>Kristin Watson</h5>
            <h6>Co-Founder, BookMyShow</h6>
          </div>
        </div>
      </div>
    </div>
    
        

    

  );
};

export default Real;




              
        
        
          
    
    // <div className={classes.aircontainer}>
    // <div className={classes.airbnb}>

    //      <img src={Airbnb} alt="air" />
    //      <div className={classes.sef}>
    //          <div className={classes.set}>
    //          <img src={Num} className={classes.set} alt="fig66" />
    //          </div>
    //          <div className={classes.par}>
             

    //          </div>
    //      </div>
    //      <div className={classes.bookcontent}>
    //      <div className={classes.book}>

    //             <img src={Book} alt="bms" />
    //             <div className={classes.sef}>
    //             <div className={classes.set}>
    //             <img src={Num} className={classes.set} alt="fig66" />
    //             </div>
    //             <div className={classes.par}>
                
    //             </div>
    //             </div>

    //             </div>
    //      </div>
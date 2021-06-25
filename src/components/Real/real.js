import Num from "../../assets/Quote Mark.svg";
import classes from "./real.module.css";
import Hubspot from "../../assets/Hubspot Logo.svg";
import Airbnb from "../../assets/Airbnb Logo.svg";
import Book from "../../assets/BookMyShow Logo.svg";

const Real = () => {
  return (
    <div className={classes.overall}>
      <div className={classes.container}>
        <div class="real">
        <div className={classes.sixsix}>
                 <img src={Num} alt="fig66" />
             </div>
             <div className={classes.content}>
                 <p>Real Stories from <br></br> Real Customers</p>
                 <h6>Get inspired by these stories.</h6>
             </div>
        </div>
        <div className={[classes.item, classes.item_1].join(" ")}>
          <img src={Airbnb} alt="air" />
          {/* <img src={Num} className={classes.set} alt="fig66" /> */}
          <div className={classes.par}>
                 <p> I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p>
                 <h5>Jane Cooper</h5>
                 <h6>CEO, Airbnb</h6>

                 </div>
        </div>
        <div className={[classes.item, classes.item_2].join(" ")}>
          <img src={Hubspot} alt="hub" />
          {/* <img src={Num} className={classes.set} alt="fig66" /> */}
          <div className={classes.par}>
                    <p>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p>
                 <h5>Floyd Miles</h5>
                 <h6>Vice President, GoPro</h6>

                    </div>
        </div>

        <div className={[classes.item, classes.item_3].join(" ")}>
          <img src={Book} alt="bms" />
          {/* <img src={Num} className={classes.set} alt="fig66" /> */}
          <div className={classes.par}>
                <p>Landify saved our time in designing my company page.</p>
                <h5>Kristin Watson</h5>
             <h6>Co-Founder, BookMyShow</h6>
                </div>
        </div>
      </div>
    </div>
    // <div className={classes.realcontainer}>
    //     <div className={classes.realcon}>
    //         <div className={classes.sixsix}>
    //             <img src={Num} alt="fig66" />
    //         </div>
    //         <div className={classes.content}>
    //             <p>Real Stories from <br></br> Real Customers</p>
    //             <h6>Get inspired by these stories.</h6>
    //         </div>
    //     </div>
    //     <div className={classes.boxes}>
    //         <div className={classes.airbnb}>

    //         <img src={Airbnb} alt="air" />
    //         <div className={classes.sef}>
    //             <div className={classes.set}>
    //             <img src={Num} className={classes.set} alt="fig66" />
    //             </div>
    //             <div className={classes.par}>
    //             <p> I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p>
    //             <h5>Jane Cooper</h5>
    //             <h6>CEO, Airbnb</h6>

    //             </div>

    //         </div>

    //         </div>
    //     </div>
    //         <div className={classes.hubspot}>
    //             <img src={Hubspot} alt="hub"/>
    //             <div className={classes.sef}>
    //                 <div className={classes.set}>
    //                 <img src={Num} className={classes.set} alt="fig66" />
    //                 </div>
    //                 <div className={classes.par}>
    //                 <p>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p>
    //             <h5>Floyd Miles</h5>
    //             <h6>Vice President, GoPro</h6>

    //                 </div>
    //             </div>

    //         </div>
    //         <div className={classes.book}>

    //             <img src={Book} alt="bms" />
    //             <div className={classes.sef}>
    //             <div className={classes.set}>
    //             <img src={Num} className={classes.set} alt="fig66" />
    //             </div>
    //             <div className={classes.par}>
    //             <p>Landify saved our time in designing my company page.</p>
    //             <h5>Kristin Watson</h5>
    //             <h6>Co-Founder, BookMyShow</h6>
    //             </div>
    //             </div>

    //         </div>

    // </div>
  );
};

export default Real;

import React from 'react';
import "./PageFour.css";
import pin from "../images/pin.svg";
import amhere from "../images/amhere.jpg";

const PageFour = () => {
  return (
    <div className="PageFour">
      <section className="contact">
      <h2>Reviews</h2>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <p>1 rating</p>
        <h2>Contact</h2>
        <p>Phone: Don't contact me...</p>
        <p>E-mail: Don't contact me...</p>
      </section>
      <section className="location">
      <h2>Location</h2>
      <div className="location-image">
        <img src={amhere} alt=""/>
        <img src={pin} className="pin" alt=""/>
      </div>
      </section>
    </div>
    );
}
 
export default PageFour;
import React from 'react';
import pin from "../images/pin.svg";
import amhere from "../images/amhere.jpg";

const Location = () => {
  return (
    <section className="location">
    <h2>Location</h2>
    <div className="location-image">
      <img src={amhere} className="amhere" alt=""/>
      <img src={pin} className="pin" alt=""/>
    </div>
  </section>
    );
}
 
export default Location;
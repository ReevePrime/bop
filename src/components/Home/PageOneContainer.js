import React from 'react';
import "./PageOneContainer.css";

const PageOneContainer = () => {
  return (
  <div className="PageOne-container">
    <div className="PageOne-image"></div>
    <div className="PageOne-card">
      <div className="PageOne-card-image"></div>
      <div className="PageOne-card-text">
        Hi, I'm Nebula.
        My owner says I have too many toys already (the gumption), so I decided to open my own store and buy my own toys with my own money.
      </div>
      <figcaption>— Nebula</figcaption>
    </div>
  </div>  
  );
}
 
export default PageOneContainer;
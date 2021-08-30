import React from 'react';
import "./PageOneContainer.css";

const PageOneContainer = () => {
  return (
  <div className="PageOne">
    <div className="PageOne-container">
      <div className="PageOne-image" />
      <div className="PageOne-card">
        <div className="PageOne-card-image" />
        <div className="PageOne-card-text">
          Hi, I'm Nebula.
          My owner says I have too many toys already (the audacity of this human), 
          so I decided to open my own store to buy toys with my own money. 
          You should go buy my coffees. You don't want me to be sad do you?
        </div>
      </div>
    </div>
  </div>  
  );
}
 
export default PageOneContainer;
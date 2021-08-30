import React from 'react';
import "./PageThree.css";
import PageThreeCard from './PageThreeCard';


const PageOne = () => {
  return (
    <div className="PageThree">
      <div className="Card-container">
        <PageThreeCard className="p3-card card1" title={"My coffees! (buy them)"} />
        <PageThreeCard className="p3-card card2" title={"My store!"} />
        <PageThreeCard className="p3-card card3" title={"About me"} />
      </div>
    </div>
    );
}
 
export default PageOne;
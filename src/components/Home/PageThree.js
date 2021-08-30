import React from 'react';
import "./PageThree.css";
import PageThreeCard from './PageThreeCard';
import Fade from 'react-reveal/Fade';
import bags from "../images/bags.jpg";
import paynebs from "../images/paynebs.jpg";
import isme from "../images/isme.jpg";


const PageOne = () => {
  return (
    <div className="PageThree">
      <div className="Card-container">
        <Fade left>
          <div className="p3-card card1">
          <PageThreeCard title={"My coffees!"} imgSrc={bags}/>
          </div>
        </Fade>
        <Fade right>
          <div className="p3-card card2" >
          <PageThreeCard title={"My store! (buy all my coffees)"} imgSrc={paynebs} />
          </div>
        </Fade>
        <Fade left>
          <div className="p3-card card3">
        <PageThreeCard title={"About me"} imgSrc={isme} />
        </div>
        </Fade>
      </div>
    </div>
    );
}
 
export default PageOne;
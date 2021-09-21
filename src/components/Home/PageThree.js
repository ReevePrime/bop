import React from 'react';
import "./PageThree.css";
import PageThreeCard from './PageThreeCard';
import Fade from 'react-reveal/Fade';
import bags from "../images/bags.jpg";
import paynebs from "../images/paynebs.jpg";
import isme from "../images/isme.jpg";
import { NavLink } from "react-router-dom";


const PageOne = () => {
  return (
    <div className="PageThree">
      <div className="Card-container">
        <Fade left>
          <div className="p3-card card1">
          <NavLink className="navlink" activeClassName="navlinkactive" to="/coffees">
            <PageThreeCard title={"My coffees!"} imgSrc={bags}/>
          </NavLink>
          </div>
        </Fade>
        <Fade right>
          <div className="p3-card card2" >
          <NavLink className="navlink" activeClassName="navlinkactive" to="/store">
            <PageThreeCard title={"My store! (buy all my coffees)"} imgSrc={paynebs} />
          </NavLink>
          </div>
        </Fade>
        <Fade left>
          <div className="p3-card card3">
          <NavLink className="navlink" activeClassName="navlinkactive" to="/about">
            <PageThreeCard title={"About me"} imgSrc={isme} />
          </NavLink>
        </div>
        </Fade>
      </div>
    </div>
    );
}
 
export default PageOne;
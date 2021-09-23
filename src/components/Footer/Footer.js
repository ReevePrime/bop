import React from "react";
import Contact from "./Contact";
import Social from "./Social";
import Location from "./Location";
import "./Footer.css";



function Footer() {
  return (
    <div className="main-footer">
      <hr />
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <Contact />
            </div>
          {/* Column2 */}
            <div className="col">
              <Social />              
            </div>
          {/* Column3 */}
            <div className="col">
              <Location />
            </div>
          </div>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Beans of Production | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Footer;
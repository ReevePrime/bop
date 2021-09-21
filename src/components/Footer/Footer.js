import React from "react";
import "./Footer.css";
import pin from "../images/pin.svg";
import amhere from "../images/amhere.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="main-footer">
      <hr />
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
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
            </div>
          {/* Column2 */}
            <div className="col">
              <div class="social-container">
                <h3 className="socialfollow">Social Follow</h3>
                <div className="social-links">
                  <a href="https://github.com/ReevePrime"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a href="https://github.com/ReevePrime"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a href="https://github.com/ReevePrime" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a href="https://github.com/ReevePrime"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>
              </div>
            </div>
          {/* Column3 */}
            <div className="col">
            <section className="location">
              <h2>Location</h2>
              <div className="location-image">
                <img src={amhere} className="amhere" alt=""/>
                <img src={pin} className="pin" alt=""/>
              </div>
            </section>
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
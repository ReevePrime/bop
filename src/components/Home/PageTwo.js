import React from 'react';
import { Parallax } from 'react-parallax';
import "./PageTwo.css";
import nebsgrr from "../images/grrr.jpg";

const insideStyles = {
  color: "white",
  position: "absolute",
  top: "180%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const PageTwo = () => {
  return (
    <div className="PageTwo">
    <div className="PageTwo-container">
      <div className="PageTwo-container-image" />
      <div className="PageTwo-container-text">
      <blockquote class="blockquote">
        <p>People often ask me, 'Nebula, what makes your product so special?' and I always tell them the same thing: 'How dare you speak to me?'</p>
          <br/><p>In truth, I am always told my beans are super cute and adorable, so by definition, this makes me an expert on this topic.</p>
        <p class="blockquote-footer">Nebula</p>
      </blockquote>
      </div>
    </div>
    <Parallax bgImage={nebsgrr} className="parallax-grrr" bgImageAlt="the cat" strength={500}>
    <div style={{ height: 200 }}>
        <div style={insideStyles}>Buy my coffee!</div>
      </div>
    </Parallax>
  </div>  
    );
}
 
export default PageTwo;
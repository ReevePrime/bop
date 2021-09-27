import React from 'react';
import AboutCarousel from './AboutCarousel';
import Image from 'react-bootstrap/Image'
import "./about.css"
import nebsbefore from "../images/nebsbefore.jpg"
import nebsafter from "../images/nebsafter.jpg"
import gam1 from "../images/gam1.jpg"
import gam2 from "../images/gam2.jpg"
import gam3 from "../images/gam3.jpg"


const About = () => {
  return (
    <div className="About-page">
      <div className="About-text">
        <div>Hi, I'm Nebula.<br/>I'm amazing and cute and adorable. Also, I sell amazing coffee. 
          <br/>But enough about you, let's talk about me.</div>
      </div>
      <div>
        <AboutCarousel/>
      </div>
      <div className="About-text">
        <div>
          I am a British Shorthair. With how cute and adorable you'd think people would adore me and buy me plenty of toys. 
          <br/>And you'd be mostly right.
          <br/>However, my owner thinks I have enough toys as it is and has told me to get a job to buy more toys with my own money.
          <br/>Considering how good I am at everything, I have decided to have him build me a website so I can make money and get my own stuff.
        </div>
        <br/>
        <div>
          I have been thinking about what to do, and considering I keep on being told I have the best and cutest beans, I figured selling coffee was made for me.
          <br/>And you know what? I never looked back! Coffee is the best thing that ever happened to me.
          <br/>Don't believe me? Keep reading...
        </div>
      </div>
      <div className="before-after">
        <Image className="nebsimage" src={nebsbefore}></Image>
          <div className="About-text">This is me before coffee. Asleep, unproductive, a disgrace to society.</div>
        <Image className="nebsimage" src={nebsafter}></Image>
          <div className="About-text">And this is me now, looking great (thank you). I haven't slept in 3 days, I have been contributing to society.</div>
      </div>
      <div className="gamimage-container">
        This is my sister Gamora. She spends her time sleeping, sunbathing and playing video games. What a loser.
        <Image className="gamimage" src={gam1}></Image>
        <Image className="gamimage" src={gam2}></Image>
        <Image className="gamimage" src={gam3}></Image>
        She's such an unproductive member of society.
        <em>DON'T BE LIKE HER,</em>
        buy my coffee (╯°□°)╯︵ ┻━┻
      </div>
    </div>
    );
}
 
export default About;



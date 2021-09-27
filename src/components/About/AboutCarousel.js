import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import nebshug from "../images/nebshug.jpg"
import nebslaze from "../images/nebslaze.jpg"
import nebsblanket from "../images/nebsblanket.jpg"

const AboutCarousel = () => {
  return ( 
    <div className="carousel-container">
    <Carousel>
  <Carousel.Item className="itemtest">
    <img
      className="d-block w-100"
      src={nebshug}
      alt="First pic of Nebula being cute"
    />
    <Carousel.Caption>
      <div className="caption-text">
        <h3 className="color-black">Am I cute or what?</h3>
        <p className="color-black">It's a rhetorical question. Yes, I am.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nebslaze}
      alt="Second pic of Nebula being cute"
    />
    <Carousel.Caption>
      <div className="caption-text">
        <h3>Just lazing in the sun</h3>
        <p>But feel free to take pictures.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nebsblanket}
      alt="Third pic of Nebula being cute"
    />
    <Carousel.Caption>
      <div className="caption-text">
        <h3>Just borrowing this blanket</h3>
        <p>If it's not meant for me, why is it made of warm, huh? Checkmate.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
   );
}
 
export default AboutCarousel;
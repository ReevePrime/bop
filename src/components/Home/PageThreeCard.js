import React, { Component } from 'react';

import { Image } from 'react-bootstrap';

const PageThreeCard = (props) => {
  return (
    <div className="Card-presentation">
      <Image src={props.imgSrc} />
      <div className="title">
      {props.title}
      </div>
    </div>
    );
}
 
export default PageThreeCard;
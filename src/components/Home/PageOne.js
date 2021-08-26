import React from 'react';
import Header from "./Header";
import PageOneContainer from './PageOneContainer';
import "./PageOne.css";


const PageOne = () => {
  return (
    <div className="PageOne">
      <Header/>
      <PageOneContainer />
    </div>
    );
}
 
export default PageOne;
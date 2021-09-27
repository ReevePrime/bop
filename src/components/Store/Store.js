import React from 'react';
import Coffeecard from './Coffee-card';
import { allcoffees } from '../Coffees/coffee-list';
import Checkout from './Checkout';
import "./Store.css";



const Store = () => {
  const coffeelist = allcoffees.map(coffee => <Coffeecard coffee={coffee} key={coffee.id}/>);

  return (
    <div className="store">
      <div className="store-layout">
        <div className="store-coffees">
          {coffeelist}
          </div>
        <Checkout />        
      </div>
    </div>
    );
}
export default Store;
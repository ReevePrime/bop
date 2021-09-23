import React from 'react';
import Coffeecard from './Coffee-card';
import { useSelector } from 'react-redux';
import { allcoffees } from '../Coffees/coffee-list';
import "./Store.css";

const Store = () => {
  const qtyitems = useSelector(state => state.shop.qtyitems)
  const price = useSelector(state => state.shop.totalprice)
  const itemsBought = useSelector(state => state.shop.products)

  const coffeelist = allcoffees.map(coffee => <Coffeecard coffee={coffee} key={coffee.id}/>);

  return (
    <div className="store">
      <div className="store-layout">
        <div className="store-coffees">
          {coffeelist}
          </div>
        <div className="store-checkout">
          <ul>
            {itemsBought.map(item => {
              return <li>{item}</li>
            })}
          </ul>
          <div>Qty: {qtyitems}</div>
          <div>Price: {price}</div>
        </div>
      </div>
    </div>
    );
}
export default Store;
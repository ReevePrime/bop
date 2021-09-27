import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CouponCheckout from './CouponCheckout';


const Checkout = () => {
  const currentAmount = useRef();
  const dispatch = useDispatch();

  const DeleteHandler = (item, currentAmount) => {
    dispatch({type: "REMOVE_FROM_CART", itemData: item})
  }

  // Sort the bought items to ensure the checkout list doesn't bounce when adding/removing items from cart
  const itemsBought = useSelector(state => state.shop.products)
  itemsBought.sort(function (a, b) {
    return a.id - b.id;
  });


  return ( 
    <React.Fragment>
    <div className="store-checkout">
          <div className="store-list">
            {itemsBought.map(item => {
              return <div className="item-list">
                <div className="item-name">{item.qty} x {item.name}</div> 
                <div ref={currentAmount} className="item-price">{item.qty * item.price}</div>
                <span class="material-icons icon-dark" onClick={() => DeleteHandler(item, currentAmount)}>delete_forever</span>
                </div> })}
          </div>
          <CouponCheckout/>
        </div>
        </React.Fragment>
   );
}
 
export default Checkout;



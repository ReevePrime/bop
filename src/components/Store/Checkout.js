import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Checkout = () => {
  const currentAmount = useRef();
  const inputCode = useRef();
  const dispatch = useDispatch();
  const price = useSelector(state => state.shop.totalprice)
  const [coupon, setCoupon] = useState(false)

  const DeleteHandler = (item, currentAmount) => {
    dispatch({type: "REMOVE_FROM_CART", itemData: item})
  }

  const CouponHandler = (couponCode) => {
    if (couponCode === "NEBULAISTHEBEST") {
      setCoupon(true);
    }
  }

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
                </div> 
            })}
          </div>
            {price ?
              coupon ?

              <div className="checkout-total">
                  <span className={coupon && "couponIsValid"}>Price: {price}</span>
                  <div>Price: {price - 0.01}</div>
                </div>

              :
              <div className="checkout-total">
                  <span>Price: {price}</span>
                </div>
                : ""}
                <div className="input">
                  <label htmlFor="coupon">
                  <input ref={inputCode} type="text" id="coupon" placeholder="Coupon code" />
                  <button onClick={() => CouponHandler(inputCode.current.value)}>Apply</button></label>
                </div>
        </div>
        
        </React.Fragment>
   );
}
 
export default Checkout;



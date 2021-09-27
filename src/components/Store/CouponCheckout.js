import React, {useRef, useState} from "react";
import { useSelector } from "react-redux";

const CouponCheckout = () => {
  const inputCode = useRef();
  const price = useSelector(state => state.shop.totalprice)
  const [coupon, setCoupon] = useState(false)

  const CouponHandler = (couponCode) => {
    if (couponCode === "NEBULAISTHEBEST") {
      setCoupon(true);
      }
    }

// Display different styles and values depending on whether or not the correct coupon was applied
  
  return ( 
    <div>
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
      <input ref={inputCode} type="text" placeholder="Coupon code" />
      <button onClick={() => CouponHandler(inputCode.current.value)}>Apply</button>
    </div>
    </div>
   );
}
 
export default CouponCheckout;

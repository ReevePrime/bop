import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Checkout = () => {
  const currentAmount = useRef();
  const dispatch = useDispatch();
  const price = useSelector(state => state.shop.totalprice)
  const DeleteHandler = (item, currentAmount) => {
    dispatch({type: "REMOVE_FROM_CART", itemData: item})
  }
  const itemsBought = useSelector(state => state.shop.products)
  itemsBought.sort(function (a, b) {
    return a.id - b.id;
  });
  return ( 
    <div className="store-checkout">
          <ul className="store-list">
            {itemsBought.map(item => {
              return <div className="item-list">
                <div className="item-name">{item.qty} x {item.name}</div> 
                <div ref={currentAmount} className="item-price">{item.qty * item.price}</div>
                <span class="material-icons icon-dark" onClick={() => DeleteHandler(item, currentAmount)}>delete_forever</span>
                </div> 
            })}
          </ul>
          {console.log(price)}
            {price ?
               <div className="checkout-total">
                  <span>Price: {price}</span>
                </div> : ""}
        </div>
   );
}
 
export default Checkout;



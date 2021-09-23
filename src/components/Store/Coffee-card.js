import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

const Coffeecard = (item) => {
  const dispatch = useDispatch();
  const currentValue = useRef();


  const clickHandler = (item, qty) => {
    const qtySelected = parseInt(qty)
    dispatch({type: "ADD_TO_CART", qtySelected, itemData: item})
  }


  return (
    <div>
      <Card>
        <Card.Header>{item.coffee.name}</Card.Header>
        <Card.Body>
          <Card.Text>
          {item.coffee.description}
          </Card.Text>
          <div className="store-button">
            <div>
              Price: {item.coffee.price}
          </div>
          <div>
            <label htmlFor="value">Choose a quantity: </label>
              <select ref={currentValue} name="order" id="order" className="store-dropdown">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="10">10</option>
              </select>
            <Button variant="primary" onClick={() => clickHandler(item.coffee, currentValue.current.value)}>Add to basket</Button>
          </div>
          </div>
        </Card.Body>
      </Card>
    </div>
    );
}
 
export default Coffeecard;
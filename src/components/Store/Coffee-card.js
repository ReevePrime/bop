import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

const Coffeecard = (item) => {
  const dispatch = useDispatch();
  const currentValue = useRef();

  const clickHandler = (item, qty) => {
    const qtySelected = parseInt(qty)
    const totalCost = item.price * qtySelected;
    dispatch({type: "ADD_TO_CART", qtySelected, totalCost, itemData: item})
  }

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const optionList = options.map(op => <option disabled>{op} [SOLD OUT]</option>)


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
                {optionList}
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
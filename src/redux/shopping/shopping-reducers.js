import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [],
  totalprice: 0,
  qtyitems: 0
}

const shopReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      const isInBasket = state.products.find(x => x.id === action.itemData.id);
      return {
        ...state,
        products: [...state.products.filter(x => x.id !== action.itemData.id), isInBasket ? 
            {...action.itemData, qty: isInBasket.qty + action.qtySelected} : {...action.itemData, qty: action.qtySelected}],
        qtyitems: state.qtyitems + action.qtySelected,
        totalprice: state.totalprice + action.qtySelected * action.itemData.price
      }
    case actionTypes.REMOVE_FROM_CART:
      const newProducts = state.products.filter(x => x.id !== action.itemData.id)
      return {
        ...state,
        qtyitems: state.qtyitems - action.itemData.qty,
        totalprice: state.totalprice - (action.itemData.qty * action.itemData.price),
        products: [...newProducts]
      }
        default:
       return {...state};
  }
}

export default shopReducer;
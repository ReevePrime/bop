import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [],
  totalprice: 0,
  qtyitems: 0
}

const shopReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case actionTypes.ADD_TO_CART:

      return {
        ...state,
        products: [...state.products.filter(x => x.id !== action.itemData.id), {...action.itemData, qty: action.qtySelected}],
        qtyitems: state.qtyitems + action.qtySelected,
        totalprice: state.totalprice + action.qtySelected * action.itemData.price
      }
    case actionTypes.REMOVE_FROM_CART:
      return {}
    case actionTypes.ADJUST_QTY:
      return {}
    default:
      return state;
  }
}

export default shopReducer;
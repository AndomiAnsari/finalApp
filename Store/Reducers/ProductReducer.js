import {CATEGORIES, ALLPRODUCTS} from '../../Data/DummyData';
import {
  addToCartActionConst,
  deleteCartItemActionConst,
} from '../Action/ProductActionConstants';
const initialState = {
  allCategories: CATEGORIES,
  allPrroduct: ALLPRODUCTS,

  myCart: [],

  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case addToCartActionConst.ADD_TO_CART_SUCC:
      const itemData = state.myCart.find(i => i.id == action.cartItem.id);
      if (itemData) {
        alert('Cart item already have');
      } else {
        state = {
          ...state,
          myCart: [...state.myCart, action.cartItem],
        };
      }

    case deleteCartItemActionConst.DELETE_CART_ITEM:
      state = {
        ...state,
        myCart: state.myCart.filter(i => i.id !== action.itemId),
      };
      break;
  }
  return state;
};

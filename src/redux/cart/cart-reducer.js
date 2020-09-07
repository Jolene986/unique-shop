import {cartActionTypes} from './cart-action-types'
import { addItemToCart} from './cart-util'


const initialState ={
  hidden :true,
  cartItems:[]
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
     return {
       ...state,
       hidden: !state.hidden
     }
     case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems : addItemToCart(state.cartItems,action.payload)
      }
  
    default:
     return state
  }
}
export default cartReducer
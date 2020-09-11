import {cartActionTypes} from './cart-action-types'
import { addItemToCart} from './cart-util'
import {decreaseQuantyty} from './cart-util'



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
     case cartActionTypes.REMOVE_ITEM_FROM_CART :
       return {
         ...state,
         cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
       }
       case cartActionTypes.DECREASE_ITEM_QUANTITY :
         return {
           ...state,
           cartItems : decreaseQuantyty(state.cartItems, action.payload)
         }
    default:
     return state
  } 
}
export default cartReducer
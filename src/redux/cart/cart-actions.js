import {cartActionTypes} from './cart-action-types'

export const toggleCartHidden = ()=> ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
} )

export const addToCart = item=> ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item
} ) 

export const removeItemFromCart = item=> ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload:item
})

 export const decereaseItemQuantity = item => (
{
 type: cartActionTypes.DECREASE_ITEM_QUANTITY,
  payload:item
})
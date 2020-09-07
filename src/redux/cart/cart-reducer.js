import {cartActionTypes} from './cart-action-types'

const initialState ={
  hidden :true
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
     return {
       ...state,
       hidden: !state.hidden
     }
  
    default:
     return state
  }
}
export default cartReducer
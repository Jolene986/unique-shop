import SHOP_DATA from './shop.data'
import {shopActionTypes} from './shop-action-types'


const initialState = {  
  collections: SHOP_DATA
}

const shopReducer = (state = initialState, action)=> {
  switch (action.type) {
    case shopActionTypes.SET_COLLECTIONS :
      return {
        ...state,
        collections : action.payload
      }
    default:
     return state
  }
}

export default shopReducer
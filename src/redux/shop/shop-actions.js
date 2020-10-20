import {shopActionTypes} from './shop-action-types'

export const setCollections = collections => ({
  type: shopActionTypes.SET_COLLECTIONS,
  payload: collections
})
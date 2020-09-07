import {userActionTypes} from './user-action-types'
//Action creators

export const setCurrentUser = user=> ({
  type:userActionTypes.SET_CURRENT_USER,
  payload: user
})
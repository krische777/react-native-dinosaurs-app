import {ADD_USER} from "../actions"
export default function (state = {}, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return {...state, ...action.payload};
    default:
      return state
  }
}
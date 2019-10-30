import { combineReducers } from 'redux'
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import dinosaursReducer from './dinosaursReducer'

export default combineReducers({
  signupReducer,
  loginReducer,
  dinosaursReducer
})
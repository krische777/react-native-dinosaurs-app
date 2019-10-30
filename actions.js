import request from 'superagent'
export const ADD_USER = 'ADD_USER'
export const LOG_IN = 'LOG_IN'
const url = 'http://localhost:8888'


function signUp(payload) {
    return {
      type: ADD_USER,
      payload: payload
    }
  }
  
  export const addUser = (username, password) => (dispatch) => {
    request
      .post(`${url}/signup`)
      .send({ username, password })
      .then(res => {
        // const status = res.status
        // dispatch(status)
        const action=signUp(res.body)
        dispatch(action)
        console.log('success')
      }).catch(error=>{
        console.log(error)
      })
  }

  function login(payload) {
    return {
      type: LOG_IN,
      payload: payload
    }
  }
  
  export const userLogin = (username, password) => (dispatch) => {
    request
      .post(`${url}/login`)
      .send({ username, password })
      .then(res => {
        console.log('log res:', res.body)
        const action = login(res.body)
        dispatch(action)
      })
      .catch(error => {
        // console.error;
        console.log('error:', error.response.body) 
      })
  }

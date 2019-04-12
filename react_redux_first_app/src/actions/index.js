import axios from 'axios';

export const SHOW_USERS = 'SHOW_USERS'

export function showUsers(){

  const users = [
    {id: 1, userName:'user1', userPhone: 123456},
    {id: 2, userName:'user2', userPhone: 654321}
  ]

  return{
    type: 'SHOW_USERS',
    payload: users
  }

  /*return (dispatch, getState) => {
    console.log('calling api rest');
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            dispatch( { type: SHOW_USERS, payload: response.data } ) 
        }) 
  }*/

}
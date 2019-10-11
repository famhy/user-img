import { ADD_USER,DELETE_USER,EDIT_USER,GET_IMGS,GET_USERS} from '../Action/actionTypes'
import axios from 'axios';


export const addUser = (newUser) => (dispatch) => {
    console.log(newUser);
    axios.post('/add-user', newUser).then((res) => {
      console.log('res', res.data);
    });
    getUserList()
  };
export const getUserList=() => (dispatch)=>{
  axios.get('/users').then((res) => {
    console.log(res.data);
    
      // listPost: res.data,
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    
  });
}

export const deleteUser=(id) => (dispatch)=>{
  axios.delete(`/user/${id}`).then((res) => {
    console.log(res.data);
    
      // listPost: res.data,
      // dispatch({
      //   type: GET_USERS,
      //   payload: res.data,
      // });
    
  });
}

export const editUser=(user) => (dispatch)=>{
  console.log('PUT : ' ,user )
  axios.put(`/user/${user._id}`).then((res) => {
    console.log(res.data);
    
      // listPost: res.data,
      // dispatch({
      //   type: GET_USERS,
      //   payload: res.data,
      // });
    
  });
}
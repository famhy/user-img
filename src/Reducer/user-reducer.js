import { ADD_USER,DELETE_USER,EDIT_USER,GET_USERS} from '../Action/actionTypes'
import axios from 'axios';

// const initialState=[
// {
//     'name':'Mohamed',
//     'surname' : 'Bahran',
//     'birthY' : '1987',
//     'birthP' : 'Tunis'
// },
// {
//     'name':'Mohamed',
//     'surname' : 'Bahran',
//     'birthY' : '1987',
//     'birthP' : 'Tunis'
// },
// {
//     'name':'Salma',
//     'surname' : 'mahmni',
//     'birthY' : '1993',
//     'birthP' : 'Bizert'
// },
// {
//     'name':'Mounir',
//     'surname' : 'Morni',
//     'birthY' : '1970',
//     'birthP' : 'Tunis'
// }
// ]



const userReduce = (state = [], action) => {
  axios.get('/users').then((res) => {
    console.log(res.data);
    
      // listPost: res.data,
    state=res.data
    
  });
    switch (action.type) {
      case GET_USERS:
        return action.payload;

      
      default:
        return state;
    }
  };
  
  export default userReduce;
  
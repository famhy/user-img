import {
    createStore, applyMiddleware, compose, combineReducers,
  } from 'redux';
  import thunk from 'redux-thunk';
 import userReducer from '../Reducer/user-reducer'
  import imgReducer from '../Reducer/img-reducer'
  const middleware = [thunk];
  
  // addItem=()=>{
  //     store.dispatch(addTodo(todo.trim()))
  //     console.log(todo)
  //     console.log(store.getState()[0].text)
  // }
  const store = createStore(
    combineReducers({
        userReducer,
        imgReducer
    }),
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  export default store;
  
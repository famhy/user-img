import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './Components/users-list'
import ImgCard from './Components/img-card'
import ImgList from './Components/img-list'
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UsersList} />
          <Route path="/profile/:id" component={ImgList} />

        </Switch>

      </BrowserRouter>
      {/* <UsersList/> */}
      {/* <ImgCard/> */}
      {/* <ImgList/> */}
    </div>
  );
}

export default App;

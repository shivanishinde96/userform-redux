import React from 'react'
import './App.css';
import { Router, Route } from 'react-router-dom'
import history from './history'
import AddUser from './components/users/AddUser';
import ListUsers from './components/users/ListUsers'
import EditUser from './components/users/EditUser'
import DeleteUser from './components/users/DeleteUser';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={ListUsers} />
          <Route path='/users/adduser' component={AddUser} />
          <Route path='/users/edituser/:id' component={EditUser} />
          <Route path='/users/deleteuser/:id' component={DeleteUser} />
        </div>
      </Router>
    </div>
  );
}

export default App;

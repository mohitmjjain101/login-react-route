import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom'
import PublicRoute from './component/PublicRoute'
import PrivateRoute from './component/PrivateRoute'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import SingIn from './component/signin'
import Setting from './component/Setting'
import About from './component/About'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={About} path="/about"></PublicRoute>
        <PublicRoute restricted={true} component={SingIn} path="/signin"></PublicRoute>
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <PrivateRoute component={Home} path="/" exact />
          
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Home from './containers/Home/Home'
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './containers/Navbar/Nav'

function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path="/" component={Home} exact/>
        </Switch>
      </React.Fragment>
  );
}

export default App;

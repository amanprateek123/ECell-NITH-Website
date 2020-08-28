import React from 'react';
import Home from './containers/Home/Home'
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from './containers/Navbar/Nav'
import Admin from './containers/Admin/Admin'

function App() {
  return (
      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/admin" component={Admin} />
        </Switch>
      </React.Fragment>
  );
}

export default App;

import React from 'react';
import Home from './containers/Home/Home'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './containers/Navbar/Nav'
import Admin from './containers/Admin/Admin'
import E404 from './containers/E404/E404'
import Gallery from './containers/Gallery/Gallery'
import Team from './containers/Team/Team'
import Initiatives from './containers/Initiatives/Initiatives';
import Events from './containers/Events/Events';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/initiatives" component={Initiatives} />
        <Route path="/admin" component={Admin} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/team" component={Team} />
        <Route path="/events/:id" component={Events} />
        <Route component={E404} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

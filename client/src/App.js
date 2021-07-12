import React, { Component } from "react";
import Home from "./containers/Home/Home";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./containers/Navbar/Nav";
import Admin from "./containers/Admin/Admin";
import E404 from "./containers/E404/E404";
import Gallery from "./containers/Gallery/Gallery";
import Team from "./containers/Team/Team";
import Initiatives from "./containers/Initiatives/Initiatives";
import Events from "./containers/Events/Events";
import Footer from "./containers/Footer/Footer";
import Partners from "./containers/Partners/Partners";
import Blogs from "./containers/Blogs/Blogs";
import gif from "./ecell.gif";
import SIP from "./containers/SIP/SIP";
import Register from "./containers/SIP/Register/Register";
import EHome from './containers/Esummit/EHome';

class App extends Component {
  state = {
    show: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 2500);
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.show ? <Navbar /> : null}
        <Switch>
          <Route path="/" exact>
            <Home show={this.state.show} />
          </Route>
          <Route path="/esummit" component={EHome} exact />
          <Route path="/sip" component={SIP} exact />
          <Route path="/initiatives" component={Initiatives} />
          <Route path="/admin" component={Admin} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/team" component={Team} />
          <Route path="/partner" component={Partners} />
          <Route path="/blog" component={Blogs} /> 

          <Route path="/events/:id" component={Events} />
          {/*<Route path="/sip/register" component={Register} />*/}
          <Route component={E404} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

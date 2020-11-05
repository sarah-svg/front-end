import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DetailPage from './DetailPage.js';
import Home from './Home.js';
import Header from './Header.js'
import './App.css';
import CreateColorPage from './CreateColorPage.js';
// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default class ParamsExample extends Component {
  render() {
    return (
      <Router>
    
          <Header />
          <Switch>
          <Route 
              path="/createColorPage" 
              exact
              render= {(routerProps) => <CreateColorPage { ...routerProps} />}
            /> 
            <Route 
              path="/detailPage" 
              exact
              render= {(routerProps) => <DetailPage { ...routerProps} />}
            />   
            <Route 
              path="/" 
              exact
              render= {(routerProps) => <Home { ...routerProps} />}
            />      
          </Switch>
          
  
      </Router>
    );
  }
}


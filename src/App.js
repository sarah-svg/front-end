import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StrainList from './Strainlist.js';
import Home from './Home.js';
import AddStrain from './AddStrain.js';
import StrainDetail from './StrainDetail.js';
import Header from './Header.js';
// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.
//////////////looks
export default class ParamsExample extends Component {
  render() {
    return (
      <Router>
    
          <Header />
          <Switch>
          <Route 
              path="/strainList" 
              exact
              render= {(routerProps) => <StrainList { ...routerProps} />}
            /> 
            <Route 
              path="/" 
              exact
              render= {(routerProps) => <Home { ...routerProps} />}
            />   
            <Route 
              path="/addStrain" 
              exact
              render= {(routerProps) => <AddStrain { ...routerProps} />}
            />   
              <Route 
              path="/strainDetail" 
              exact
              render= {(routerProps) => <StrainDetail { ...routerProps} />}
            />         
          </Switch>
          
  
      </Router>
    );
  }
}


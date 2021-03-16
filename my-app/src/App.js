import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Profile from './components/Profile';
import './App.css';
import Nav from './Nav';
import About from './components/About';

class App extends Component {
  render(){  
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/About" exact component={About} />
            <PrivateRoute path="/Profile" exact component={Profile}/>
          </Switch>  
        </div>
      </Router>
    );
  }  
}

export default App;

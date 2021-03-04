import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import About from './About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  render(){  
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/About" exact component={About} />
          </Switch>  
        </div>
      </Router>
    );
  }  
}

export default App;

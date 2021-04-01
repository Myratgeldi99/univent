import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Profile from './components/Profile';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import EventsList from './components/Event/EventsList';
import CreateEvent from "./components/CreateArea";
import Signup from './components/Registration';

class App extends Component {
  render(){  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/EventsList" exact component={EventsList} />
            <Route path="/CreateEvent" exact component={CreateEvent} />
            <PrivateRoute path="/Profile" exact component={Profile}/>
          </Switch>  
        </div>
      </Router>
    );
  }  
}

export default App;

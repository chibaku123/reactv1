import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componests/Home';
import About from './componests/About';
import Contact from './componests/Contact';
import Women from './componests/Women';
import Men from './componests/Men';
import Login from './componests/Login';
import Navbar from './componests/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Women' component={Women} />
        <Route path='/Men' component={Men} />
        <Route path='/Login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

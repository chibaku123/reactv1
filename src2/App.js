import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Signup from './Components/Signup';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/Home' Component={Home} exact>
          <Home/>
        </Route>
        <Route path='/About' Component={About} exact>
          <About/>
        </Route>
        <Route path='/Contact' Component={Contact} exact>
          <Contact/>
        </Route>
        <Route path='/Signup' Component={Signup} exact>
          <Signup/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

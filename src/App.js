import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import './css/reset.css';
import './css/App.css';
import Landing from './components/landing.js';
import SignInSide from './components/material-ui.js';


function App() {
  return (
    <div className="App">

        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/material" component={SignInSide} />
          
          {/* <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
        </Router>


    </div>
  );
}

export default App;

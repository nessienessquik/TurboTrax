import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

// import './css/reset.css';
import './css/App.css';
import Landing from './components/landing.js';
import SignInSide from './components/material-ui.js';
import RegistrationForm from './components/registration-form.js';
import Main from './components/main-container.js';


function App() {
  return (
    <div className="App">

        <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/material" component={SignInSide} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/main" component={Main} />
        </Router>


    </div>
  );
}

export default App;

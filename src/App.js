import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome'
import Portfolio from './components/Main/Portfolio'

import './App.css'
function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Route exact path="/" component={Welcome}></Route>
        <Route path ="/portfolio" component={Portfolio}></Route>
      </div>
    </Router>
    </div>
  );
}

export default App;

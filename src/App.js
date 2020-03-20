import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './header/header';
import Home from './home/home'
import Tips from './tips/tips';
import Healthcare from './healthcare/healthcare';
import Blog from './blog/blog';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/home"><Home/></Route>
          <Route path="/tips"><Tips/></Route>
          <Route path="/healthcare"><Healthcare/></Route>
          <Route path="/blog"><Blog/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

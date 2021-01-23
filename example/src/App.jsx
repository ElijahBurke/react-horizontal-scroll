import React from 'react'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
  <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Hero} />
      </Switch>
    </Router>
  </>
  )
}

export default App

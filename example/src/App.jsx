import React from 'react'
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Docs from './components/Docs/Docs';

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
        <Route exact path="/docs" component={Docs} />
      </Switch>
    </Router>
  </>
  )
}

export default App

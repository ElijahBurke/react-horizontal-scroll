import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Docs from './Components/Docs/Docs';

function App () {
  return (
    <>
      <Router>
        <Nav />
        <div className="nav-buffer" />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/docs/:name" render={(routeProps) => <Docs name={routeProps.match.params.name} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import MemePage from './MemePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:memeId" component={MemePage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

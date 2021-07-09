import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import Page from './components/pages/Page';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Page} />
            <Route path="/404" component={PageNotFound} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './pages/Home';
import History from './pages/History';
import Menu from './pages/Menu';
import Directions from './pages/Directions';
import NoMatch from './pages/NoMatch';
import "./stylesheets/styles.sass";

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="history" component={History}/>
        <Route path="menu" component={Menu}/>
        <Route path="directions" component={Directions}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  ), document.getElementById('root')
);

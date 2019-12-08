import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux'
import store from './store'
import setAuthToken from './util/setAuthToken'
import { loadUser } from './actions/auth';

//Components
import Landing from './components/layout/Landing'
import Nav from './components/layout/Nav'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Alert from './components/layout/Alert'
import Dashboard from './components/layout/Dashboard'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (<Provider store={store}>
    <Router>
      <Fragment>
        <Nav />
        <Route exact path="/" component={Landing} />
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>)
}



export default App;

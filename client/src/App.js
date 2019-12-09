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
import ProfileForm from './components/profile/ProfileForm'
import PrivateRoute from './components/routing/PrivateRoute'
import Admin from './components/admin/Admin'

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
        <Alert />
        <PrivateRoute exact path="/admin" component={Admin} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profileForm" component={ProfileForm} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>)
}



export default App;

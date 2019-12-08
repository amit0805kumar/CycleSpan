import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux'
import store from './store'

//Components
import Landing from './components/layout/Landing'
import Nav from './components/layout/Nav'
import Login from './components/auth/Login'
import Register from './components/auth/Register'



const App = () => {
  return (<Provider store={store}>
    <Router>
      <Fragment>
        <Nav />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </Fragment>
    </Router>
  </Provider>)
}



export default App;

import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./util/setAuthToken";
import { loadUser } from "./actions/auth";


//Components
import Landing from "./components/layout/Landing";
import Nav from "./components/layout/Nav";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileForm from "./components/profile/ProfileForm";
import ProfileEditForm from "./components/profile/ProfileEditForm";
import PrivateRoute from "./components/routing/PrivateRoute";
import AdminRoutes from "./components/routing/AdminRoutes";
import Admin from "./components/admin/Admin";
import OtpAcceptor from "./components/station/OtpAcceptor";
import RideIdAcceptor from "./components/station/RideIdAcceptor";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = (props) => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const history = createBrowserHistory()
  var pathFlag = history.location.pathname === "/otpAccept" || history.location.pathname === "/rideIdAccept"
  
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {
            !pathFlag ? <Nav /> : <React.Fragment></React.Fragment>
          }
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <AdminRoutes  path="/admin" component={Admin} />
            <Route  path="/otpAccept" component={OtpAcceptor} />
            <Route  path="/rideIdAccept" component={RideIdAcceptor} />
            <Route  path="/register" component={Register} />
            <PrivateRoute  path="/dashboard" component={Dashboard} />
            <Route  path="/login" component={Login} />
            <PrivateRoute  path="/profileForm" component={ProfileForm} />
            <PrivateRoute path="/profileEdit" component={ProfileEditForm}/>

            <Route component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

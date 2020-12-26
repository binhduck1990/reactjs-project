import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { ProvideAuth } from "./Auth.js";
import {Login} from './components/login'
import {PrivateRoute} from './components/protect'
import {DashBoard} from './components/dashboard'

export default function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/dashboard">
              <DashBoard />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
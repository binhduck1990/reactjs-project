import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProvideAuth } from "./Auth.js";
import {Login} from './pages/Login'
import {PrivateRoute} from './pages/Protect'
import {DashBoard} from './pages/DashBoard/Dashboard'
import Navbar from './components/NavBar/Navbar'

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/">
              <Navbar/>
              <DashBoard />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
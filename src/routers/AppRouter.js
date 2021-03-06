import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { Navbar } from "../components/ui/NavBar";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" component={ LoginScreen }></Route>
              <Route path="/" component={ DashboardRoutes }></Route>
            </Switch>
          </div>
        </Router>
      );
}

import React from "react";
import { Route, Router, Switch } from "react-router";
import EditBook from "../Pages/EditBook/EditBook";
import ErrorPage from "../Pages/ErrorPage/HomePage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import ShowBooks from "../Pages/ShowBooks/ShowBooks";
import { Global } from "../Styles/Global.Styles";
import { history } from "./History";

const Routes = () => {
  return (
    <Router history={history}>
      <Global />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/showbooks" component={ShowBooks} />
        <Route exact path="/editbook" component={EditBook} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Routes;

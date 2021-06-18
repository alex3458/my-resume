import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import BaseLayout from "pages/layout/base-layout";
import Home from "pages/home";
import { ApplicationContext } from "context/store";

import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <ApplicationContext>
        <BaseLayout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/dashboard'>Dashboard</Route>
            <Redirect to='/' />
          </Switch>
        </BaseLayout>
      </ApplicationContext>
    </BrowserRouter>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Loader from "./components/Loader";
import ViewsLayout from "./viewsLayout";

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import(`./pages/Login`))}
            />
            <Route path="/" component={ViewsLayout} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

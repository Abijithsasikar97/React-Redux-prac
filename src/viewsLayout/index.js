import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "../components/Header";

export const ViewsLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path="/learnerslist"
            component={lazy(() => import(`../pages/LearnersList`))}
          />
          <Route
            exact
            path="/viewlearner"
            component={lazy(() => import(`../pages/ViewLearner`))}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default ViewsLayout;

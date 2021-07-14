import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from "./routeNames";
import CounterContainer from "../components/Counter/containers/CounterContainer";


const Routes = () => {
   return (
      <Switch>
         <Route exact path={ROUTES.HOME_PAGE} component={() => <div>Home</div>} />
         <Route path={ROUTES.COUNTER_PAGE} component={CounterContainer} />
      </Switch>
   );
};



export default Routes;
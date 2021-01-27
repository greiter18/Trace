import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from './session_form/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import WorkOutIndex from './workouts/workout_index';
import RoutesIndex from './routes/routes_index'
import RoutesNew from './routes/routes_new'

const App = () => {
	return(
		<div>
      <header className="header">
        {/* <h1 className="logo">Trace</h1> */}
      </header>
      
      <AuthRoute exact path="/" component={SplashContainer}/>
      <AuthRoute exact path="/login"  component={LogInFormContainer}/>
      <AuthRoute exact path="/signup"  component={SignUpFormContainer}/>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
      <ProtectedRoute exact path="/workouts" component={WorkOutIndex}/>
      <ProtectedRoute exact path="/routes" component={RoutesIndex}/>
      <ProtectedRoute exact path="/routes/new" component={RoutesNew}/>
      {/* <ProtectedRoute exact path="/dashboard/:userId" component={DashboardContainer}/>
      <ProtectedRoute exact path="/routes/:routeId" component={RouteShowContainer}/> */}


				
		</div>
	)
}

export default App;
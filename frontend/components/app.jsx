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
import WorkOutIndex from './workouts/workout_index_container';
import WorkoutForm from './workouts/workout_form_container';
import WorkoutShow from './workouts/workout_show_container';
import WorkoutEditFormContainer from './workouts/workout_edit_form_container';
import RoutesIndexContainer from './routes/routes_index_container'
import RouteForm from './routes/routes_form_container'
import RoutesShowContainer from './routes/routes_show_container'
import RoutesEditContainer from './routes/routes_edit_container'

const App = () => {
	return(
		<div>
      <header className="header">
        {/* <h1 className="logo">Trace</h1> */}
      </header>
      <AuthRoute exact path="/" component={SplashContainer}/>
      <AuthRoute exact path="/login"  component={LogInFormContainer}/>
      <AuthRoute exact path="/signup"  component={SignUpFormContainer}/>
      <ProtectedRoute exact path="/new/workouts" component={WorkoutForm}/>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
      <ProtectedRoute exact path="/workouts" component={WorkOutIndex}/>
      <ProtectedRoute exact path="/workouts/:workoutId" component={WorkoutShow}/>
      <ProtectedRoute exact path="/workouts/:workoutId/edit" component={WorkoutEditFormContainer}/>
      <ProtectedRoute exact path="/routes" component={RoutesIndexContainer}/>
      <ProtectedRoute exact path="/routes/:routeId" component={RoutesShowContainer}/>
      <ProtectedRoute exact path="/routes/:routeId/edit" component={RoutesEditContainer}/>
      <ProtectedRoute exact path="/new/routes" component={RouteForm}/>
      {/* <ProtectedRoute exact path="/dashboard/:userId" component={DashboardContainer}/>
      <ProtectedRoute exact path="/routes/:routeId" component={RouteShowContainer}/> */}
		</div>
	)
}

export default App;
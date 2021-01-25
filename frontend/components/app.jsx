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
import Splash from './session_form/splash';
import DashboardContainer from './dashboard/dashboard_container';

const App = () => {
	return(
		<div>
      <header className="header">
        {/* <h1 className="logo">Trace</h1> */}
      </header>
      
      <Route exact path="/" component={Splash}/>
      <AuthRoute exact path="/login"  component={LogInFormContainer}/>
      <AuthRoute exact path="/signup"  component={SignUpFormContainer}/>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer}/>
      {/* <ProtectedRoute exact path="/dashboard/:userId" component={DashboardContainer}/>
      <ProtectedRoute exact path="/routes/:routeId" component={RouteShowContainer}/> */}


				
		</div>
	)
}

export default App;
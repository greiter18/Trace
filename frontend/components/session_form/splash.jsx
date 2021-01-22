import React from 'react';
import Navbar from './nav_bar';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Splash = (props) =>{

  return (
    <div className="splash">
      <header><Navbar/></header>
      <p className="headLine">The #1 app for runners and cyclists</p>
      <div className="homeImage">
      <img  alt="strava Image HUR" />
      </div>
      <div className="demoButton">
      <Link to ="">Demo User</Link>
      </div>
      or
      <div className="signUpbutton">
      <Link to="/signup">Sign Up</Link>
      </div>
      <div className="splashFinePrint">
        <span>By signing up for Trace, you agree to the Terms of Service. View our Privacy Policy.</span> 

        <span>Already a member? <Link to="/login">Log In</Link></span>
      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>

  )  
}

export default Splash;
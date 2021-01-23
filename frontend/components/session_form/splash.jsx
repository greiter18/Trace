import React from 'react';
import Navbar from './nav_bar';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Splash = (props) =>{

  return (
    <div className="splash_form">
      
      <header><Navbar/></header>
      <p className="headLine">The #1 app for runners and cyclists</p>
      <div className="homeImage">
        <img className="home_image"src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" />
      </div>
      <div className="splash_center_form">
        <Link className="sign_up_buttom" to="/signup">Sign Up</Link>
        <div className="or-box">
          <span className="or-box line"></span>
          <span className="or-box or"> or </span>
          <span className="or-box line"></span>
        </div>
          <Link className="demoButton" to="">Demo User</Link>
      </div>
      
      <div className="splash_fine_print">
        <br/>
        <div>
          <span>By signing up for Trace, you agree to the Terms of Service. View our Privacy Policy.</span> 
        </div>
        <br/>
        <div>
          <span>Already a member? <Link to="/login">Log In</Link></span>
        </div>
      </div>
      <br />
      <footer className="footer">
        <Footer />
    </footer>
      <div>
      </div>

    </div>

  )  
}

export default Splash;
import React from 'react';
import Navbar from './nav_bar';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Splash = () =>{

  return (
    <div>
      <Navbar/>
      <div className="splash_form">
        <p className="headLine">The #1 app for runners and cyclists</p>
        <br/>

        <div className="splash_middle">
            <img className="home_image"src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" />
          <div className="splash_center_form">
            <div className="splash_center_form_buttons">
              <Link className="sign_up_button" to="/signup">Sign Up</Link>
                <div className="or-box">
                  <span className="or_box_line"></span>
                  <span className="or_box_or"> or </span>
                  <span className="or_box_line"></span>
                </div>
              <Link className="demoButton" to="">Demo User</Link>
            </div>
            <div className="splash_fine_print">
              <br/>
                <span>By signing up for Trace, you agree to the Terms of Service. View our Privacy Policy.</span> 
              <br/>
                <span>Already a member? <Link to="/login">Log In</Link></span>
            </div>
          </div>
        </div>
          <br/>
      </div>
          <footer className="footer">
            <Footer />
          </footer>
    </div>
  )  
}

export default Splash;
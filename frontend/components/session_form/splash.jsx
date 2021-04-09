import React from 'react';
import Navbar from './nav_bar';
import { Link } from 'react-router-dom';


const Splash = (props) =>{

  return (
    <div>
      <Navbar/>
      <div className="splash_form">
        <h1 className="headLine">The #1 app for runners and cyclists</h1>
        <br/>

        <div className="splash_middle">
          
          <img className="home_image" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" />
          <div className="splash_center_form">
            <div className="splash_main_form">
              <div className="splash_center_form_buttons">
                <Link className="splash_buttons" id="sign_up_button" to="/signup">Sign Up</Link>
                  <div className="or-box">
                    <span className="or_box_line"></span>
                    <span className="or_box_or"> or </span>
                    <span className="or_box_line"></span>
                  </div>
                <Link className="splash_buttons" id="splash_demo_button" onClick={() => { props.login({ email: 'guest', password: 'password' }) }}>Demo User </Link>
              </div>
            </div>
            <div className="splash_fine_print">
              <br/>
                <span>By signing up for Trace, you agree to the Terms of Service. View our Privacy Policy.</span> 
              <br/>
                <span className="already_a_member">Already a member? <Link className="member_link" to="/login">Log In</Link></span>
            </div>
          </div>
        </div>
          <br/>
      </div>
        <footer>
          <div className="session_footer">
            <p className="footer_logo">TRACE</p>
            <ul>
              <li className="footer_top_list">Skills</li>
              <li className="footer_list">JavaScript</li>
              <li className="footer_list">Ruby on Rails</li>
              <li className="footer_list">React / Redux</li>
              <li className="footer_list">HTML / CSS</li>
            </ul>
            <ul>
              <li className="footer_top_list">Social Media</li>
              <li className="footer_list"> <a href="https://www.linkedin.com/in/gabriel-reiter-7352b2b7/" target="_blank"> Linked-In</a></li>
              <li className="footer_list"><a href="https://angel.co/u/gabriel-reiter" target="_blank">Angel List</a></li>
            </ul>
            <ul>
              <li className="footer_top_list">GET STARTED</li>
              <li className="footer_list"><Link to="/signup">SIGN UP</Link></li>
              <li className="footer_list"><Link to="/login">LOG IN</Link></li> 
            </ul>
          </div>
        </footer>
    </div>
  )  
}

export default Splash;
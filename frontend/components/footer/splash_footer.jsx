import React from 'react';
import { Link } from 'react-router-dom';

const SplashFooter = (props) => {
  return(
    <div>
      <h1>
        <footer>
            <div className="session_footer">
              <p className="footer_logo">TRACE</p>
              
              <ul>
                <li className="footer_top_list">Technologies</li>
                <li className="footer_list">JavaScript</li>
                <li className="footer_list">Ruby on Rails</li>
                <li className="footer_list">React / Redux</li>
                <li className="footer_list">HTML / CSS</li>
                <li className="footer_list">PostgreSQL</li>
              </ul>
              <ul>
                <li className="footer_top_list">Social Media</li>
                <li className="footer_list"> <a href="https://www.linkedin.com/in/gabriel-reiter-7352b2b7/" target="_blank"> Linked-In</a></li>
                <li className="footer_list"><a href="https://angel.co/u/gabriel-reiter" target="_blank">Angel List</a></li>
                <li className="footer_list"><a href="https://github.com/greiter18" target="_blank">GitHub</a></li>
                <li className="footer_list"><a className="footer_list" href="https://github.com/greiter18/Trace" target="_blank">GitHub - Trace</a></li>
                
              </ul>
              <ul>
                <li className="footer_top_list">GET STARTED</li>
                <li className="footer_list"><Link to="/signup">SIGN UP</Link></li>
                <li className="footer_list"><Link to="/login">LOG IN</Link></li> 
              </ul>
            </div>
          </footer>
      </h1>
    </div>
  )
}

export default SplashFooter;
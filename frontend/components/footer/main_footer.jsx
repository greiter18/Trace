import React from 'react';
import { Link } from 'react-router-dom';

const MainFooter = (props) => {
  return(
    <div>
        <footer id="footer">
            <div className="main_footer">
              <ul>
                <li><Link to='/dashboard' className="main_footer_logo">TRACE</Link>  </li> 
                <li className="main_footer_list"><a href="https://github.com/greiter18/Trace" target="_blank">GitHub - Trace</a></li>
              </ul>
              <ul>
                <li className="main_footer_top_list">Technologies</li>
                <li className="main_footer_list">JavaScript</li>
                <li className="main_footer_list">Ruby on Rails</li>
                <li className="main_footer_list">React / Redux</li>
                <li className="main_footer_list">HTML / CSS</li>
                <li className="main_footer_list">PostgreSQL</li>
              </ul>
              <ul>
                <li className="main_footer_top_list" id="footer_links">About Me</li>
                <li className="main_footer_list"> <a href="https://www.linkedin.com/in/gabriel-reiter-7352b2b7/" target="_blank"> Linked-In</a></li>
                <li className="main_footer_list"><a href="https://angel.co/u/gabriel-reiter" target="_blank">Angel List</a></li>
                <li className="main_footer_list"><a href="https://github.com/greiter18" target="_blank">GitHub</a></li>
              </ul>
            </div>
          </footer>
    </div>
  )
}

export default MainFooter;
import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const footer = () => {
  return (
    <div className="footer">



      <div>
        <ul>
          <li className="head_footer">GET STARTED</li> 
          <br/>
          <li><Link to="/signup">SIGN UP</Link></li> 
          <li><Link to="/login">LOG IN</Link></li> 
        </ul>
      </div>

    </div>
  )
}

export default footer; 
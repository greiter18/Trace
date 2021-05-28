import {Link, withRouter} from 'react-router-dom';
import React from 'react';


const Navbar = (props) => {
  let Button;
  if (props.location.pathname === '/' || props.location.pathname === '/signup'){
    Button = <Link to='/login'>Log In</Link>
  } else {
    Button = <Link to="/signup">Sign Up</Link>
  }
  
  return(
    <div className="session_header">
        <Link className='nav_session_logo_header' to="/"> TRACE </Link>
        <Link className="splash_log_in">{Button}</Link> 
    </div>
  )
} 

export default withRouter(Navbar)
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
    <div className='navbar'>
      <header className="session_header">
        <span className ='nav_session_logo'><Link to="/"> TRACE </Link></span> 
        <button className="navButton">{Button}</button> 
      </header>

    </div>
  )
} 

export default withRouter(Navbar)
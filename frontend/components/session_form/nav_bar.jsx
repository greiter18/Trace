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
    <div>
      <header className='navbar'>
        <span><Link to="/"> Tracer </Link></span> 
        <span className="navButton">{Button}</span> 
      </header>

    </div>
  )
} 

export default withRouter(Navbar)
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./naviation.css"
import { useSelector } from "react-redux";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user)
  console.log("sessionUser:", sessionUser)

 if(!sessionUser)
 {
  return (
    <nav>
      <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
          </div>
        <div className="home-login">
          <NavLink to='/login' exact={true} activeClassName='home-login'>
            Login
          </NavLink>
        </div>
        <div className="home-signup">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>      
       
      
    </nav>
  );
}
else {
return (
  <nav>
      <div className='home-button'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>        
        <div>
          <NavLink to='/create-pin-form' exact={true} activeClassName='active'>
            Create Pin 
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      
    </nav>
  );

  }
}

export default NavBar;

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
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>       
       
      </ul>
    </nav>
  );
}
else {
return (
  <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>        
        <li>
          <NavLink to='/create-pin-form' exact={true} activeClassName='active'>
            Create Pin 
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );

  }
}

export default NavBar;

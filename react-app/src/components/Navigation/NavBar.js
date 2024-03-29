import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import "./naviation.css"
import { useSelector } from "react-redux";
import LoginFormModal from '../auth/loginformmodal';
import SignUpFormModal from '../auth/signupformmodal';
import ProfileIcon from '../../images/profile-icon.png'
import Search from './search';

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user) 

 if(!sessionUser)
 {
  return (
    <nav >
      <div id="navigation-div">
      
      <div>
        <img
        className='profile-icon' 
        src={ProfileIcon}
        />
      </div>
      <div>
          <NavLink to='/home' exact={true} activeClassName='active'>
            Home
          </NavLink>
          </div>
          <div>
            <LoginFormModal />
          </div>
          <div>
            <SignUpFormModal />
          </div>         
                     </div>
    </nav>
  );
}
else {
return (
  <nav>
    <div id="navigation-div">

      <div>
        <img
        className='profile-icon' 
        src={ProfileIcon}
        />
      </div>    

      <div className='home-button'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div>
          <Search />
          </div>        
        <div>
          <NavLink to='/create-pin-form' exact={true} activeClassName='active'>
            Create  
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      
    </div>
    </nav>
  );

  }
}

export default NavBar;

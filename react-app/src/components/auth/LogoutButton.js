import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import '../Navigation/naviation.css'

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/home")
  };

  return <button className='logout-button' style={{ cursor: 'pointer' }} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;

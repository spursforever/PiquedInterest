import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/session';
import "./loginform.css"
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    history.push('/')
    if (data) {
      setErrors(data);
      
    }
  };

  const demoUser = async (e) => {
    e.preventDefault()
    await dispatch(login('demo@aa.io', 'password'));
    history.push('/')
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='login-page-container'>     
        <h2 className='welcome-word'>Welcome to PiquedInterest!</h2>      
    <form className='login-form-design' onSubmit={onLogin}>
      <div className='login-form-error-cantainer'>
        {errors.map((error, ind) => (
          <div key={ind} className="log-in-errors">{error}</div>
        ))}
      </div>
      <div className='login-form-field-container'>
        <div className='login-detail-container'>        
        <input
          className='input-detail'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
        <label className="default-label" htmlFor="email"></label>
      </div>
      <div className='login-detail-container'>        
        <input
          className='input-detail'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
         <label className="default-label" htmlFor="password"></label>
         </div>
        <button className="login-button" type='submit'>Login</button>
        <button className="demo-button" type='submit' onClick={demoUser}>Demo User</button>
      </div>
    </form>
    
    </div>
  );
};

export default LoginForm;

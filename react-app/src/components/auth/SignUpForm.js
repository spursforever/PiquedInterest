import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import "./signupform.css"
import Footer from '../Footer';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
 
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const validationErrors = []
    if (!first_name)
      validationErrors.push("Please enter your first name")
    if (!last_name)
      validationErrors.push("Please enter your last name")
    if (!email)
      validationErrors.push("Please enter your email")
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) ) 
      validationErrors.push("Please enter a valid email address")
    if (!password)
      validationErrors.push("Please enter password")
    if (!repeatPassword)
      validationErrors.push("Please enter the same password again")
    if (password !== repeatPassword) validationErrors.push("Passwords field must match repeat password field.")    
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name,  email, password, repeatPassword));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };   

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-page-container'>
      <h2 className='signup-welcome'>Sign up to enjoy PiquedInterest!</h2>
    <form className='signup-form' onSubmit={onSignUp}>
      <div className='signup-page-error-container'>
        {errors.map((error, ind) => (
          <div key={ind} className='signup-errors'>{error}</div>
        ))}
      </div>
      <div className="signup-form-container">
      <div className="signup-detail-container">        
        <input
         className='signup-form-input'
          type='text'
          name='username'
          onChange={updateFirstName}
          value={first_name}
          placeholder="Please enter your first name"          
        ></input>
      </div>
      <div>        
        <input
         className='signup-form-input'
          type='text'
          name='username'
          onChange={updateLastName}
          value={last_name}
          placeholder="Please enter your last name"          
        ></input>
      </div>
      <div>        
        <input
         className='signup-form-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder="Please enter your email"
          
        ></input>
      </div>
      <div>        
        <input
         className='signup-form-input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder="Please create your password"          
        ></input>
      </div>
      <div>        
        <input
          className='signup-form-input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder="Please retype the same password again"                   
        ></input>
      </div>      
      <button className='signup-button' type='submit'>Sign Up</button>      
    </div>
    </form>
    <div>
      <Footer />
    </div>
    </div>
  );
};

export default SignUpForm;

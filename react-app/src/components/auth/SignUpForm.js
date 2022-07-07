import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profile_pic, setProfilePic] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const validationErrors = []
    if (!first_name)
      validationErrors.push("Please provide your first name")
    if (!last_name)
      validationErrors.push("Please enter your last name")
    if (!email)
      validationErrors.push("Please enter your email")
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
      const data = await dispatch(signUp(first_name, last_name, profile_pic , email, password));
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
  
  const updateProfilePicture = (e) => {
    setProfilePic(e.target.value)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>First Name: </label>
        <input
          type='text'
          name='username'
          onChange={updateFirstName}
          value={first_name}
          placeholder="Your first name"
        ></input>
      </div>
      <div>
        <label>Last Name: </label>
        <input
          type='text'
          name='username'
          onChange={updateLastName}
          value={last_name}
          placeholder="Your last name"
        ></input>
      </div>
      <div>
        <label>Email: </label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder="Please enter email address"
        ></input>
      </div>
      <div>
        <label>Password: </label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder="Please enter password"
        ></input>
      </div>
      <div>
        <label>Repeat Password: </label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder="Please retype the password again"
          // required={true}
        ></input>
      </div>
      <div>
        <label>Profile Image: </label>
        <input
          type='text'
          name='username'
          onChange={updateProfilePicture}
          value={profile_pic}
          placeholder="Profile picture url"
        ></input>
      </div>
      <button type='submit'>Sign Up</button>      
    </form>
  );
};

export default SignUpForm;

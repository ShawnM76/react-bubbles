import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = event => {
    console.log('handleChange', event);
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  const login = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/colors');
      })
      .catch(error => console.log(error.response));
  };

  return (
    <>
      <h1>Please Login!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={handleChange}
          value={user.username}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
          value={user.password}
        />
        <button onClick={login}>Log in</button>
      </form>
    </>
  );
};

export default Login;

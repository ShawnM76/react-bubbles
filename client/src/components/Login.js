import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const login = event => {
    event.preventDefault();
    axios
      .post('http://localhost:3000/api/login', user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubbles');
      })
      .catch(error => console.log(error.response));
  };

  return (
    <>
      <h1>Please Login!</h1>
      <form>
        <input
          type='text'
          name='usernaame'
          placeholder='username'
          value={user.username}
        />
        <input
          type='text'
          name='password'
          placeholder='password'
          value={user.password}
        />
        <button onClick={login}>Log in</button>
      </form>
    </>
  );
};

export default Login;

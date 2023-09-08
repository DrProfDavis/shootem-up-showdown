import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  // removed email and replaced with username
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        // email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← LOG IN INSTEAD</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username: </label>
          <input
            placeholder="enter username here"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        {/* <div className="flex-row space-between my-2">
          <label htmlFor="email">Email: </label>
          <input
            placeholder="enter email here"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div> */}
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password: </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

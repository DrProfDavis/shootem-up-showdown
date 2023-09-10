import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';

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
    <div className="signup main-container center">
      <Container className="text-center signup">
        <div className='positioned-div'>
          <div className="card">
            <h4 className="card-header p-2">Sign Up</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                  <label htmlFor="username"></label>
                  <input
                    placeholder="Username"
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
                  <label htmlFor="pwd"></label>
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-row space-between my-2">
                  <Button
                    className="btn btn-block btn-primary"
                    style={{ cursor: 'pointer' }}
                    type="submit">Submit
                  </Button>
                </div>
                <div>
                  <Link to="/login"
                    className="btn btn-block btn-secondary"
                  >Log In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;

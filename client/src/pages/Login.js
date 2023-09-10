import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col } from 'react-bootstrap';


const Login = (props) => {
  // removed email
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      // email: '',
      username: '',
      password: '',
    });
  };

  return (
    <div className="login main-container center">
      <Container className="text-center">
        <div className='positioned-div'>
          <div className="card">

            <h4 className="card-header p-2">Login</h4>
            <div className="card-body">

              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (

                <form onSubmit={handleFormSubmit}>
                  {/* <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                /> */}
                  <div className="flex-row space-between my-2">
                    <input
                      className="form-input"
                      placeholder="Your username"
                      name="username"
                      type="username"
                      value={formState.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-row space-between my-2">
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex-row space-between my-2">
                    <Button
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                  <div>
                    <Link to="/signup"
                      className="btn btn-block btn-secondary"
                    >
                      Sign Up
                    </Link>
                  </div>
                </form>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
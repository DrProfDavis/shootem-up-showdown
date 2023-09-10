import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';


const Login = (props) => {
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
      username: '',
      password: '',
    });
  };

  return (
    <div className="login main-container center">
      <Container className="text-center">
        <div className='positioned-div'>
          <div >
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (

              <form class="form-signin" onSubmit={handleFormSubmit}>
                <h2 className="card-header p-2">HOWDY🌵</h2>
                <label htmlFor="username" for="inputEmail" class="sr-only"></label>
                <input class="form-control" placeholder="Username "
                  name="username" type="username" value={formState.username} onChange={handleChange} required autofocus />

                <label for="inputPassword" class="sr-only"></label>
                <input class="form-control" placeholder="******" name="password" type="password" value={formState.password} onChange={handleChange} required />

                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>

                <button class="btn btn-lg btn-warning btn-block" type="submit">LOG IN</button>
                <br></br>
                <br></br>
                <p>Don't have an account?<Link to="/signup">  Sign Up</Link></p>
                <p class="mt-2 mb-0 text-muted">&copy; 2023</p>

              </form>

            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
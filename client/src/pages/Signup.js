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
          {/* <div className="card"> */}
            {/* <h4 className="card-header p-2">Sign Up</h4> */}
            {/* <div className="card-body"> */}

              {/* <form onSubmit={handleFormSubmit}>
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
              </form> */}
              <form class="form-signin" onSubmit={handleFormSubmit}>
                <h2 className="card-header p-2">SIGN UP🌵</h2>
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

                <button class="btn btn-lg btn-warning btn-block" type="submit">SIGN UP</button>
                <br></br>
                <br></br>
                <p>Already have an account?<Link to="/login">  Log In</Link></p>
                <p class="mt-2 mb-0 text-muted">&copy; 2023</p>

              </form>

            </div>
          {/* </div> */}
        {/* </div> */}
      </Container>
    </div>
  );
}

export default Signup;

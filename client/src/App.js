// import{ useState } from "react"
import React from 'react';
import Game from './pages/Game';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import HowToPlay from './pages/HowToPlay';
import Leaderboard from './pages/Leaderboard';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
    return (
      <ApolloProvider client={client}>
        {/* <Grid/> */}
        <Router>
          <Routes>
              <Route 
                path="/"
                element={<Game />}
              />
              <Route 
                path="/home" 
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/leaderboard" 
                element={<Leaderboard />}
              />
              <Route 
                path="/howtoplay" 
                element={<HowToPlay />}
              />
          </Routes>
        </Router>
      
      </ApolloProvider>
      
    );
}

export default App;

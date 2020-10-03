import React from 'react';
import Aside from './Aside';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from './components/auth/Login';
import Models from './components/models/Models';
import Functions from './components/functions/Functions';
import Settings from './icons/Settings';
import MediaStorage from './components/storage/MediaStorage';
import Extensions from './icons/Extensions';
import Model from './components/models/Model';

const API_URL = "https://apicamp-graphql.herokuapp.com/v1/graphql";

console.log(`${API_URL}`);

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": "r5862n",
      "content-type": "application/json"
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/" exact><Redirect to="/models" /></Route>
          <PrivateRoute path="/models" exact component={Models} />
          <PrivateRoute path="/models/add" exact component={Model} />
          <PrivateRoute path="/functions" exact component={Functions} />
          <PrivateRoute path="/storage" exact component={MediaStorage} />
          <PrivateRoute path="/extensions" exact component={Extensions} />
          <PrivateRoute path="/settings" exact component={Settings} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

const PrivateRoute = ({ component: Component }: any) => (
  <Route
    exact
    render={(props) =>
      localStorage.getItem("loginStatus") === "true" ? (
        <div className="d-flex flex-row flex-column-fluid page">
          <Aside />
          <div className="d-flex flex-column flex-row-fluid wrapper">
            <Component {...props} />
          </div>
        </div>
      ) : (
          <Redirect to="/login" />
        )
    }
  />
);

export default App;

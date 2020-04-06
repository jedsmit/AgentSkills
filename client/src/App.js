import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from './Components/Login';
import Register from './Components/Register';
import Notes from './Components/Notes';
import Admin from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import PublicRoute from './hocs/PublicRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PrivateRoute path="/notes" roles={['user', 'admin']} component={Notes} />
      <PrivateRoute path="/admin" roles={['admin']} component={Admin} />
    </Router>
  );
}

export default App;

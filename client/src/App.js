import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from './Components/Login';
import Register from './Components/Register';
import AgentList from './Components/AgentList';
import Admin from './Components/Admin';
import AgentPage from "./Components/AgentPage";
import PrivateRoute from './hocs/PrivateRoute';
import PublicRoute from './hocs/PublicRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlackjackSkills from './Components/BlackjackSkills';


function App() {

  return (
    <Router>

      <Navbar />
      <Route exact path="/" component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="/blackjack" component={BlackjackSkills} />
      <PrivateRoute path="/admin" roles={['admin']} component={Admin} />
      <PrivateRoute path="/agents" roles={['user', 'admin']} component={AgentList} />
      <PrivateRoute path="/agent/:id" roles={['user', 'admin']} component={AgentPage} />

    </Router>
  );
}

export default App;

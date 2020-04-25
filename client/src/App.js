import React from 'react';
import "./app.css";
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
      <div className="container conatiner-fluid homeBg">
        <Route exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute path="/register" roles={['admin']} component={Register} />
        <PrivateRoute path="/admin" roles={['admin']} component={Admin} />
        <PrivateRoute path="/agents" roles={['user', 'admin']} component={AgentList} />
        <PrivateRoute path="/agent/:id" roles={['user', 'admin']} component={AgentPage} />
        <PrivateRoute path="/blackjack" roles={['user', 'admin']} component={BlackjackSkills} />
      </div>

    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './Context/AuthContext';
import AgentProvider from './Context/AgentContext';


ReactDOM.render(
  <AuthProvider>
    <AgentProvider>
      <App />
    </AgentProvider>
  </AuthProvider>, document.getElementById('root')
);


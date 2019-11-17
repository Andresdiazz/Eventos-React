import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Login from './pages/login';
import Signup from './pages/signup';
import Edit from './components/Events/Edit'
import Create from './components/Events/Create'
import Show from './components/Events/Show'
import Home from './pages/Home'
import { AuthProvider } from './config/auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
          <Route path="/show/:id" component={Show} />
        </Switch>
      </Router>
    </AuthProvider>
    //document.getElementById('root')
  );
}

export default App;

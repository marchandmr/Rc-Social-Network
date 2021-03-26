import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Error404 from './Components/Error404'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={SignIn} />
          <Route exact path={"/SignUp"} component={SignUp} />
          <Route path={"*"} component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

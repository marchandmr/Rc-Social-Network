
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home'
import Error404 from './Components/Error404'
import UserProfile from './Components/UserProfile';



function App() {

  function updateSession(email) {

    localStorage.setItem("currentEmail", email)

  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}
            render={(props) => (
              <SignIn {...props} update={updateSession} />
            )}
          />
          <Route exact path={"/SignUp"} component={SignUp} />

          <Route path={"/Home"} component={Home} />
          <Route path={"/Profile"} component={UserProfile} />
          <Route path={"*"} component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

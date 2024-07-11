import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "./components/logout";
import jwtDecode from 'jwt-decode';
import LoginForm from './components/loginForm';
import Signup from './components/signupForm';
import NavBar from "./components/navBar";
import Home from "./components/home"
import Francis from "./components/francisProfile";


class App extends Component {

  state = {};

 componentDidMount(){
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    this.setState({ user })
    
  } catch (error) {}
 
  }

  render() {

    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="container">
          <Routes>           
            <Route path="login" Component={LoginForm} />
            <Route path="logout" Component={Logout} />
            <Route path="signup" Component={Signup} />    
            <Route path="francis" Component={Francis} />  
            <Route path="*" Component={Home} />            
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import  "./css/App.css";
import LoginForm from './components/loginForm';
import NavBar from "./components/navBar";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="login" Component={LoginForm} />        
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
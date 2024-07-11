import React from "react";
import { Link, NavLink } from "react-router-dom";
//import signupForm from './signupForm';
//import { login } from '../services/authService';


const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
          Java App Web
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="home">
            Home
          </NavLink>      
             {!user && (
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/login">         
                  Login
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/signup">
                  Sign up
                 </NavLink> 
              </React.Fragment>
          )}
            {user && (
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/francis">         
                {user.name}
                 </NavLink>
                 <NavLink className="nav-item nav-link" to="/logout">
                 logout
                 </NavLink> 
              </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


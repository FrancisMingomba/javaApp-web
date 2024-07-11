//import Joi, { errors } from 'joi-browser';
import Joi from "joi-browser";
import React from 'react';
import Form from './form';
import * as userService from  '../services/userService';
import "../css/signupForm.css";


class signupForm extends Form{
    state = { 
        data: {username: "", password: "", name: ""},
        errors: {}
    };

    schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().label("Name")
    };

    doSubmit = async () => {

               // console.log("It works");
              // redirection code. probably capture the return value from above and check if it was successful.
   try {
        const response =  await  userService.signup(this.state.data);  
        console.log(response);                  
    }catch (ex) {
        if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
           // errors.username = "User already exist";
            this.setState({errors});
          

        }
    }
 };
    render() {       
        return (        
            <div className="auto-form-container">              
                <h1>Sign up</h1>
                <form  onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password","password")}
                    {this.renderButton("Register")}
                </form>           
            </div>
        );      
    } 
}
 
export default  signupForm;
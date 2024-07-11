import React  from 'react';
//import  useNavigate  from 'react-router-dom';
//import  withNavigateHook  from '../withNavigateHook';
import Joi from 'joi-browser';
import Form from './form';
import { login } from '../services/authService';



class LoginForm extends Form{
    state = { 
        data: {username: "", password: ""},
        errors: {}
     };

     schema = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password")
       
     };

     doSubmit = async () =>{
        try {
            const { data } = this.state;
            const  {data: jwt}  = await login(data.username, data.password);
            localStorage.setItem( "token",JSON.stringify (jwt));
           // window.location = "/logout";
            window.location = "/francis";
           
       

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = ex.response.data;
                this.setState({ errors });
            }         
        }       
     };

    render() { 
        return (
            <div className="auto-form-container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} type="button">
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password","password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
 
export default  LoginForm;


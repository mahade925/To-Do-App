import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div class="center">
            <h1>Login</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="Login"/>
                <div class ="signup_link">
                Not a member?<NavLink to="/signup"><a href="#">Signup</a></NavLink>
                </div>
            </form>
        </div>
    );
};

export default Login;
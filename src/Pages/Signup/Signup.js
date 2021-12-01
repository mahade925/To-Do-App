import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div>
        <div class="center">
            <h1>Sign up</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required/>
                    <span></span>
                    <label>Name</label>
                </div>
                <div class="txt_field">
                    <input type="email" required/>
                    <span></span>
                    <label>Email</label>
                </div>
                <div class="txt_field">
                    <input type="password" required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="Login"/>
                <div class ="signup_link">
                Not a member?<NavLink to="/"><a href="#">Login</a></NavLink>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Signup;
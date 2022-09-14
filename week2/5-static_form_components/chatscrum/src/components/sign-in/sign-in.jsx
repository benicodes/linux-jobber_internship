import React from 'react';
import './sign-in.css';

const SignIn = () => {
    return (
        <div className="sign-in">
            <h3>Already have an account?</h3>
            <h4>Sign in here!</h4>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <label htmlFor="project">Project Name</label>
                <input type="text" name="project" />
                <div className="button-div">
                    <button>SIGN IN</button>
                </div>
            </form>
            <p className="question">Don't have an account? Sign Up</p>
        </div>
    )
}

export default SignIn;
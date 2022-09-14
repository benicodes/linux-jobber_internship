import React from "react";
import './sign-up.css';

const SignUp = () => {
  return (
    <div className="sign-up">
      <h3>Don't have an account?</h3>
      <h4>Sign up here!</h4>
      <form>
          <label htmlFor="text">Full name</label>
          <input type="text" name="text" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <label htmlFor="options">User Type</label>
          <select id="options">
            <option value="Developer">Developer</option>
            <option value="Owner">Owner</option>
          </select>
        <div className="button-div">
          <button>SIGN UP</button>
        </div>
      </form>
      <p className="question">Have an account? Sign In</p>
    </div>
  )
}

export default SignUp;
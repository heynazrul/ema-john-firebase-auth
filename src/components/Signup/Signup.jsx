import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
      <div className="form-container">
        <h2 className="form-title">Signup</h2>
        <form>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              id=""
              required
            />
          </div>
          <input
            className="btn-submit"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    );
};

export default Signup;
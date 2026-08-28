import React, { useState } from 'react';
import '../Signin/SignInForm.css'
import { faEnvelope, faLock, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SignInService from '../../SERVICES/SignInService';

const SigninForm = () => {
    const [userDetails, setUserDetails] = useState({
      email: "",
      password: "",

    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setUserDetails((prev) => {
        return { ...prev, [name]: value };
      });
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await SignInService(userDetails);
        console.Console(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    return (
      <div className="signup-form-container">
        <form action="" className="sign-up-form" onSubmit={handleSubmit}>
          <div className="signup-input-field-container">
            <label htmlFor="email">Email</label>
            <div className="signin-input-with-icon">
              <FontAwesomeIcon icon={faEnvelope} className="signin-icon" />
              <input
                className="signin-input-field"
                type="email"
                name="email"
                id="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </div>
          </div>
  
          <div className="signin-input-field-container">
            <label htmlFor="password">Password</label>
            <div className="signup-input-with-icon">
              <FontAwesomeIcon icon={faLock} className="signin-icon" />
              <input
                className="signin-input-field"
                type="password"
                name="password"
                id="password"
                value={userDetails.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
}

export default SigninForm;

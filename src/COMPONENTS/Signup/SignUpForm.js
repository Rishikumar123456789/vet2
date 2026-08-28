import React, { useState } from "react";
import SignUpService from "../../SERVICES/SignUpService";
import "../Signup/SignUpForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
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
      const response = await SignUpService(userDetails);
      console.Console(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="signup-form-container">
      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
        <div className="signup-input-field-container">
          <label htmlFor="fullname">FullName</label>
          <div className="signup-input-with-icon">
            <FontAwesomeIcon icon={faUser} className="signup-icon" />
            <input
              className="signup-input-field"
              type="text"
              name="fullname"
              id="fullname"
              value={userDetails.fullname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-input-field-container">
          <label htmlFor="email">Email</label>
          <div className="signup-input-with-icon">
            <FontAwesomeIcon icon={faEnvelope} className="signup-icon" />
            <input
              className="signup-input-field"
              type="email"
              name="email"
              id="email"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-input-field-container">
          <label htmlFor="phone_number">Phone Number</label>
          <div className="signup-input-with-icon">
            <FontAwesomeIcon icon={faPhone} className="signup-icon" />
            <input
              className="signup-input-field"
              type="number"
              name="phone_number"
              id="username"
              value={userDetails.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-input-field-container">
          <label htmlFor="password">Password</label>
          <div className="signup-input-with-icon">
            <FontAwesomeIcon icon={faLock} className="signup-icon" />
            <input
              className="signup-input-field"
              type="password"
              name="password"
              id="password"
              value={userDetails.possword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="signup-input-field-container">
          <label htmlFor="confirm_password">Confirm Password</label>
          <div className="signup-input-with-icon">
            <FontAwesomeIcon icon={faLock} className="signup-icon" />
            <input
              className="signup-input-field"
              type="password"
              name="confirm_password"
              id="confirm_password"
              value={userDetails.confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

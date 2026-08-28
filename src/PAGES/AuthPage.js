
import "../PAGES/AuthPage.css";
import doctor from '../ASSETS/Images/doctor-cat-desttop.png'
import logo from '../ASSETS/Images/loog.png'
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
const AuthPage = () => {
  const [instruction,setInstruction]=useState("Signin to Your Account")

  return(<div className="auth-page">
     <div className="auth-card">
      <div className="auth-image-container">
        <img src={doctor} alt="" className="auth-image" />
      </div>
      <div className="auth-content-container">
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="message">WELCOME BACK</div>
        <div className="instructor">{instruction}</div>
        <div className="sliding-tab">
          <NavLink to="Signin" className={({isActive})=>`nav-links ${isActive ? "active" : ""}`}  onClick={()=>setInstruction("SignIn to Your Account")} >SignIn</NavLink>
          <NavLink to="Signup" className={({isActive})=>`nav-links ${isActive ? "active" : ""}`}  onClick={()=>setInstruction("SignUp to Your Account")}  >SignUp</NavLink>
        </div>
        <div className="form-container"><Outlet></Outlet></div>
        <div  className="or">------Or----------</div>
        <div  className="google">Continue with Goole</div>
      </div>

     </div>
  </div>)
};

export default AuthPage;

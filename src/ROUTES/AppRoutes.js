import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../PAGES/AuthPage";
import SignInForm from '../COMPONENTS/Signin/SignInForm';
import SignUpForm from '../COMPONENTS/Signup/SignUpForm'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage></AuthPage>}>
          <Route index element={<Navigate to="signin" replace/>}></Route>
          <Route path="signin" element={<SignInForm></SignInForm>}></Route>
          <Route path="signup" element={<SignUpForm></SignUpForm>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

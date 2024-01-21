import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = () => {
    return true;
  };
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/sample");
    }
  });
  return <div>LoginPage</div>;
};

export default LoginPage;

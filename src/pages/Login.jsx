import React, { useContext } from "react";
import { login } from "../services/userApi";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContextBase";
import logo from "../assets/runprepperlogo.svg";

const Login = () => {
  const { setUser, setIsLoggedIn } = useContext(UserContext);

  let navigate = useNavigate();

  const onSubmit = async (data) => {
      const response = await login(data);
      setUser({ username: data.username });
      setIsLoggedIn(true);
      localStorage.setItem("username", data.username)
      localStorage.setItem("isLoggedIn", true)
      navigate("/profile");
      return response;
  };

  const fields = [
    {
      name: "username",
      label: "Username",
      validation: { required: "Username is required" },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: {
        required: "Password is required",
      },
    },
  ];

  return (
    <div className="form-container">
      <h2 id="label">Login</h2>
      <img src={logo} alt="RunPrepper Logo" className="login-logo" />
      <Form fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

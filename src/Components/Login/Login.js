import React, { useState } from "react";
import "./login.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import Logo from "../Logo/Logo";
import auth from "../../firebase.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    //firebase Login
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((auth) => {
        // move to home page
        history("/home-page");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    //firebase registration

    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        if (auth) {
          alert("Your account has been created please login now.");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <Logo />
      </div>
      <form>
        <div className="login__input">
          <AlternateEmailIcon />
          <input
            type="text"
            placeholder="Enter you email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__input">
          <KeyIcon />
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit" onClick={logIn} className="button">
          Log In
        </button>
        <button onClick={register} className="button">
          Create your Whatsapp account
        </button>
      </form>
    </div>
  );
}

export default Login;

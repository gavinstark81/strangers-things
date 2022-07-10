import React, { useState } from "react";
import { Register } from "components";
import { loginUser } from "api/apiRegister";
import "./Login.css";

export default function Login({ setToken, result }) {
  //console.log("heres login", setToken);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <div id="logTitle">Login:</div>
      {errorMessage ? <h4 style={{ color: "red" }}>{errorMessage}</h4> : null}
      <form
        onSubmit={async (e) => {
          setErrorMessage("");
          e.preventDefault();
          const result = await loginUser(username, password);
          if (result.success) {
            localStorage.setItem("token", result.data.token);
            setToken(result.data.token);
            setPassword("");
            setUsername("");
          } else {
            const errorMessage = result.error.message;
            setErrorMessage(errorMessage);
          }
        }}
      >
        <input
          className="login"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          Submit
        </button>
      </form>
      <Register setToken={setToken} />
    </div>
  );
}

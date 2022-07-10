import { createUser } from "api/apiRegister";
import React, { useState } from "react";
import "./Login.css";
export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");

  return (
    <div>
      <div className="register">Register:</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createUser(username, password);
          console.log("heres result", result);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input
          className="register"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { Register } from "components";
import { loginUser } from "api/apiRegister";

export default function Login({ setToken }) {
  //console.log("heres login", setToken);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>Login:</div>
      <form
        onSubmit={async (e) => {
          // try catch here would be nice and log error in red if user is already made
          e.preventDefault();
          const result = await loginUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Register setToken={setToken} />
    </div>
  );
}

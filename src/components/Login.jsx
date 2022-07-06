import React, { useState } from "react";
import { Register } from "components";
import { loginUser } from "api/apiRegister";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  let navigate = useNavigate();
  //console.log("heres login", setToken);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>Login:</div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      />
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
      <Register setToken={setToken} />
    </div>
  );
}

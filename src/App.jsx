import { Posts, Login, NavBar, Register } from "components";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchMe } from "api/apiRegister";

export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    console.log(localStorageToken);
    async function getMe() {
      const result = await fetchMe(localStorageToken);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
      </Routes>
    </>
  );
}

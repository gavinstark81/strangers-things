import { Posts, Login, NavBar, Register, Logout } from "components";
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
      {currentUser?.username ? (
        <h3
          style={{ color: "green" }}
        >{`Logged in as: ${currentUser.username}`}</h3>
      ) : (
        <h3 style={{ color: "red" }}>"Please log in or register for access"</h3>
      )}
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

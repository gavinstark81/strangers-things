//note: I believe this is the same file as written in app.jsx useeffect...
//found on pawaans github as useAuth.js... not sure which to use yet.

import { useState, useEffect } from "react";
import { fetchMe } from "api/apiRegister";

const useAuth = () => {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      console.log("result from fetch me auth.js", result);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);
  return {
    currentUser,
    setCurrentUser,
    token,
    setToken,
  };
};

export default useAuth;

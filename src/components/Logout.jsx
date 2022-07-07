import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout({ setToken, setCurrentUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
    navigate("/");
  });

  return;
}

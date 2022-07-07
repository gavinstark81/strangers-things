import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout({ setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setToken(null);
    navigate("/");
    document.location.reload(true); //I know we are trying to build a react page without reloading... but this works
  });

  return;
}

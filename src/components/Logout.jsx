import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout({ setToken }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    setToken(null);
    navigate("/");
  });

  return;
}

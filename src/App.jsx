import { Posts, Login, NavBar, Register } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

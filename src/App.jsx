import { Posts, Login } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </>
  );
}

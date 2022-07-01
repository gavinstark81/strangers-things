import { Post, Login } from "components";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </>
  );
}

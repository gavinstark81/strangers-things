import React, { useState } from "react";
import { CreateNewPost } from "api/apiposts";
import { useNavigate } from "react-router-dom";

function Create({ token }) {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  // console.log(willDeliver);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          CreateNewPost({ price, description, title, willDeliver }, token);
          navigate("/Posts");
        }}
      >
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Will Deliver</label>
        <input
          checked={willDeliver}
          type={"checkbox"}
          onChange={(e) => setWillDeliver(e.target.checked)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Create;

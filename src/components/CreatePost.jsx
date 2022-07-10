import React, { useState } from "react";
import { createNewPost } from "api/apiposts";
import { useNavigate } from "react-router-dom";
import "./Create.css";

function Create({ token }) {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault(); //capital function below bad...
          await createNewPost(
            { price, description, title, willDeliver },
            token
          );
          //await createnewpost, pass posts,setposts into, create posts returns newposts
          //new array w new posts in it. spread > splice
          //morning review spread operrator

          navigate("/Posts");
        }}
      >
        <input
          className="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="price"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label className="willDeliver">Will Deliver</label>
        <input
          className="deliver"
          checked={willDeliver}
          type={"checkbox"}
          onChange={(e) => setWillDeliver(e.target.checked)}
        />
        <button className="submit" type="submit">
          Make the post
        </button>
      </form>
    </div>
  );
}

export default Create;

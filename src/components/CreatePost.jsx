import React, { useState } from "react";

function CreatePost() {
  const [createPost, setCreatePost] = useState([]);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => e.target.value}
        />
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => e.target.value}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;

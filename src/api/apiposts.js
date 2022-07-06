import { Posts } from "components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const fetchAllPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const result = await response.json();
  return result;
};

// export const createUser = async (username, password) => {
//   const response = await fetch(`${url}/users/register`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       user: {
//         username: username,
//         password: password,
//       },
//     }),
//   });
//   const result = await response.json();
//   return result;
// };
export const CreatePost = ({ token, setPost, post }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, SetWillDeliver] = useState(false);

  const handleCreatePost = async (event) => {
    event.preventDefault();
    let authString = "Bearer " + token;
    const postObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authoization: authString,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          willDeliver: willDeliver,
          location: post.Location,
        },
      }),
    };
    let response = await createPost(postObject);
    if (response.success) {
      const postCopy = [...Posts];
      postCopy.push(response.data.post);
      setPosts(postCopy);
      const newPosts = await fetch();
      setPost(newPosts);
      navigate.push(`/Home`);
    }
  };
};

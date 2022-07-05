import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/apiposts";

function Posts() {
  const [posts, setPosts] = useState([]);
  // console.log("posts are here", posts[0]);
  useEffect(() => {
    const getAllPost = async () => {
      const result = await fetchAllPosts();
      setPosts(result.data.posts);
      // console.log("heres the stuff", result.data.posts);
    };
    getAllPost();
    // console.log("heres the effect", useEffect);
  }, []);
  // console.log("posts:", posts);
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <h4 key={`Key: ${index}`} post={post}>
            <div>{post.title}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{post.description}</div>
          </h4>
        );
      })}
    </div>
  );
}
export default Posts;

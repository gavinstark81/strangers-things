import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/apiposts";
import CreatePost from "./CreatePost";

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
      <CreatePost />
      {posts.map((post, index) => {
        console.log(posts);
        return (
          <h4 key={`Key: ${index}`} post={post}>
            <div>{post.title}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{post.description}</div>
            <div>{`Location: ${post.location}`}</div>
            <div>
              {post.willDeliver ? "Will deliver: Yes" : "Will deliver: No"}
            </div>
          </h4>
        );
      })}
    </div>
  );
}
export default Posts;

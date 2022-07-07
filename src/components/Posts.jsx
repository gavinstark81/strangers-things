import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/apiposts";
import Delete from "./Delete";
import Edit from "./Edit";

function Posts({ currentUser }) {
  const [posts, setPosts] = useState([]);
  // console.log("posts are here", posts);
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
        // console.log(posts);
        return (
          <>
            <h4 key={`Key: ${index}`} post={post}>
              <div>{`Title: ${post.title}`}</div>
              <div>{`Username: ${post.author.username}`}</div>
              <div>{`Price: ${post.price}`}</div>
              <div>{`Post: ${post.description}`}</div>
              <div>{`Location: ${post.location}`}</div>
              <div>
                {post.willDeliver ? "Will deliver: Yes" : "Will deliver: No"}
              </div>
            </h4>
            {currentUser._id === post.author._id ? <Delete /> : null}
            {currentUser._id === post.author._id ? <Edit /> : null}
          </>
        );
      })}
    </div>
  );
}
export default Posts;

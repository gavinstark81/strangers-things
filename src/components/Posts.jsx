import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "api/apiposts";
import Delete from "./Delete";
import Edit from "./Edit";
//import Messages from "./MessagesForm";
import MessagesForm from "./MessagesForm";
import Search from "./Search";
import "./Posts.css";

function Posts({ currentUser, token }) {
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
      <Search posts={posts} setPosts={setPosts} />
      {posts.map((post, index) => {
        //console.log(posts);
        // console.log(currentUser.posts);
        return (
          <>
            <h4 key={`Key: ${index}`} post={post} className="postCard">
              <div>{`Title: ${post.title}`}</div>
              <div>{`Username: ${post.author.username}`}</div>
              <div>{`Price: ${post.price}`}</div>
              <div>{`Post: ${post.description}`}</div>
              <div>{`Location: ${post.location}`}</div>
              <div>
                {post.willDeliver ? "Will deliver: Yes" : "Will deliver: No"}
                {currentUser._id === post.author._id ? (
                  <Delete
                    postId={post._id}
                    token={token}
                    posts={posts}
                    setPosts={setPosts}
                  />
                ) : null}
                {currentUser._id === post.author._id ? (
                  <Edit postId={post._id} token={token} posts={posts} />
                ) : null}
                {currentUser._id !== post.author._id ? (
                  <MessagesForm postId={post._id} token={token} />
                ) : null}
              </div>
            </h4>
          </>
        );
      })}
    </div>
  );
}
export default Posts;

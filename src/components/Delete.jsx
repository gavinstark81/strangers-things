import { DeletePost } from "api/apiposts";
import "./edit-del.css";
export default function Delete({ postId, token, posts, setPosts }) {
  // console.log("the post object", postObject);

  return (
    <span>
      <button
        className="button"
        onClick={async (e) => {
          console.log("post id troubleshoot: ", e.postId);
          e.preventDefault();
          const result = await DeletePost(postId, token); //not sure about values
          console.log(result);
          if (result.success) {
            const filteredPosts = posts.filter((post) => {
              return post._id !== postId;
            });
            setPosts(filteredPosts);
          }
        }}
      >
        Delete
      </button>
    </span>
  );
}

// {currentUser._id === post.author._id ? <Delete /> : null}

//on click remove link... need to use deletepost from api
//must check user id is matched to auth token or user id
//double check props passed into deletepost is correct

//we should make it so the delete and edit button only show when the userid===post id

//Your posts should have a way for the active user to delete them,
// only if isAuthor is true for the post. Go ahead and add that now.
//You'll also have to add a click handler to make that DELETE request.
//For each post, the delete handler will need a way to recover the post._id to help
// form the correct URL for the request.
//On successful delete, make sure to remove that post from the page
// as well as from the array that is holding all posts in state.

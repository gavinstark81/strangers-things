import React from "react";
import { DeletePost } from "api/apiposts";

export default function Delete() {
  return (
    <div>
      <button>Delete</button>
    </div>
  );
}

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

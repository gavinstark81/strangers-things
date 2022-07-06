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

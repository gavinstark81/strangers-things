export const fetchAllPosts = async (token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts"
  );
  const result = await response.json();
  return result;
};

export const createNewPost = async (postObject, token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: postObject,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const DeletePost = async (postId, token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};

//work on onclick functionality before checking if messages are sent to api
export const sendMessage = async (messages, token, postId) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${postId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: { content: messages },
      }),
    }
  );
  const result = await response.json();
  return result;
};

// adding the edit function but not invoking it yet
// export const EditPost = async () => {
//   const response = await fetch (`https://strangers-things.herokuapp.com/api/2206-ftb-mt-web-ft/posts/${postId}`{
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   })
//   const result = await response.json()
//   return result
// }

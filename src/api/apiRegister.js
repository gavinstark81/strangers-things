import login from "components/Login";

//const url = https://strangers-things.herokuapp.com/api
const url = "http://localhost:3000";

export const createUser = async (name) => {
  const response = await fetch(`${url}/api/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
    }),
  });
  const result = await response.json();
  return result;
};

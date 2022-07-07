import { sendMessage } from "api/apiposts";
import { useState } from "react";

function MessagesForm({ postId, token }) {
  const [message, setMessage] = useState("");
  console.log(message);
  return (
    <span>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(message);
          await sendMessage(message, token, postId);
        }}
      >
        <input
          value={message}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>
    </span>
  );
}

export default MessagesForm;

import { sendMessage } from "api/apiposts";
import { useState } from "react";
import "./MessageForm.css";

function MessagesForm({ postId, token }) {
  const [message, setMessage] = useState("");
  return (
    <span>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await sendMessage(message, token, postId);
        }}
      >
        <button type="submit" className="MessageButton">
          Send message
        </button>
        <input
          value={message}
          placeholder="message"
          onChange={(e) => setMessage(e.target.value)}
          className="MessageBox"
        />
      </form>
    </span>
  );
}

export default MessagesForm;

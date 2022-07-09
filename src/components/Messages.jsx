import "./messages.css";

function Messages({ currentUser }) {
  if (!currentUser.username) {
  } else
    return (
      <div>
        {currentUser.messages.map((message, index) => {
          //console.log(message);
          return (
            <>
              <div className="messageBoard">
                <p>Post Title: {message.post.title}</p>
                <p>From: {message.fromUser.username}</p>
                <p>{currentUser.messages[index].content}</p>
              </div>
            </>
          );
        })}
      </div>
    );
}
export default Messages;

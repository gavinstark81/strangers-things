// function Messages({currentUser}) {
//   return (<div>
//   {currentUser.Messages.map((message, content) => {
//      return ()
//   }};

//   </div>
// ))}

// export default Messages;

function Messages({ currentUser }) {
  return (
    <div>
      {currentUser.messages.map((message, content) => {
        return (
          <>
            <p>{currentUser.messages[0].content}</p>
          </>
        );
      })}
    </div>
  );
}
export default Messages;
//<h4>{currentUser.messages[0].content}</h4>

//END OF DAY THURSDAY NOTES: we just got the message testing to render on the messages page..
//however its logged twice so we need to figure out why.
//using currentUser.messages[0] will obviously only log the first message in the array.
//i guess map over all messages to a new array and return that new array on the messages page?

let count = 0;
function Message() {
  console.log(count, "message is called");
  count++;
  return <h1>Message {count}</h1>;
}

export default Message;

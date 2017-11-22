import React, {Component} from 'react';
import io from 'socket.io-client';
import ChatBar from './ChatBar';
import Message from './Message';
import MessageList from './MessageList';

class ChatContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: "Anonymous",
      messages: ["What's up"],
    }
  }

  componentDidMount(){
    this.socket = new io("//localhost:3001");
    console.log(this.socket);
  }

  break;

  sendMessage (e) {
    if (e.key === "Enter"){
      var msg = {
        type: "postMessage",
        id: "",
        // currentUser: this.state.currentUser,
        content: e.target.value
      };
      console.log(msg.content);
      this.socket.emit("reply", JSON.stringify(msg))
      e.target.value = "";
    }
  }

  render() {
    return (

      <div>
        {/* <MessageList currentUser = 'Seb'
          messages = {this.state.messages} type = {this.state.type}/> */}
        <ChatBar currentUser = 'Seb' currentMessage = {this.state.currentMessage}
          sendMessage = {this.sendMessage.bind(this)} />
      </div>
    )
  }
}

export default ChatContainer;

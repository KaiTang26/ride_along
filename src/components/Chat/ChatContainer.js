import React, {Component} from 'react';
import io from 'socket.io-client';
import ChatBar from './ChatBar';
import Message from './Message';
import MessageList from './MessageList';

class ChatContainer extends Component {

  constructor(props) {
    super(props)
    console.log("in props");
    this.state = {
      currentUser: 'Seb',
      messages: ["What's up", "very cool"]
    }
  }

  componentDidMount(){
    this.socket = new io("//localhost:3001");
    console.log('did mount');
    const self = this;
    this.socket.on('reply', function(msg){
      console.log(msg.content+" returned from server");
      const messages = self.state.messages
      self.setState({
        messages: messages.concat(msg.content)
      })
    })
  }


  sendMessage (e) {
    if (e.key === "Enter"){
      var msg = {
        type: "postMessage",
        id: "",
        // currentUser: this.state.currentUser,
        content: e.target.value
      };
      console.log(msg.content);
      this.socket.emit("reply", msg)
      e.target.value = "";
    }
  }

  render() {
    return (

      <div>
        {console.log(this.state)}
        <MessageList currentUser = {this.state.currentUser}
          messages = {this.state.messages} type = {this.state.type}/>
        <ChatBar currentUser = {this.state.currentUser} currentMessage = {this.state.messages}
          sendMessage = {this.sendMessage.bind(this)} />
      </div>
    )
  }
}

export default ChatContainer;

import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    console.log("chatbar", this.props);
    return (
        <footer className="chatbar">
          <input
            className="chatbar-username"
            placeholder="Your Name (Optional)"
            onKeyUp={this.props.sendName}/>
          <input className="chatbar-message"
            placeholder="Type a message and hit ENTER"
            onKeyPress={this.props.sendMessage} />
        </footer>
    );
  }
}
export default ChatBar;

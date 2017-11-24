import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    console.log("chatbar", this.props);
    return (
        <footer className="chatbar">
          <input className="chatbar-message" onKeyPress={this.props.sendMessage} />
        </footer>
    );
  }
}
export default ChatBar;

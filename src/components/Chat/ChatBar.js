import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class ChatBar extends Component {
  render() {
    console.log("chatbar", this.props);
    return (
        <footer className="chatbar">
          <TextField 
            placeholder="join the conversation"
            className="chatbar-message" 
            fullWidth={true}
            onKeyPress={this.props.sendMessage} />
        </footer>
    );
  }
}
export default ChatBar;

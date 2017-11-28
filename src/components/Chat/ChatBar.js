import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


class ChatBar extends Component {
  render() {
    return (
        <footer>
          <TextField
            placeholder="Enter a message to join the conversation"
            fullWidth={true}
            onKeyPress={this.props.sendMessage} />
        </footer>
    );
  }
}
export default ChatBar;

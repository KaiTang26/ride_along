import React, {Component} from 'react';

class Message extends Component {
  render() {
      return (
        <div className="message">
          <div className="message-username">{this.props.userName}</div>
          <div className="message-content">{this.props.content}</div>
        </div>
      );
  }
}
export default Message;

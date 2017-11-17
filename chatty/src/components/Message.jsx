import React, {Component} from 'react';

class Message extends Component {
  render() {
    // Come back to this
        // console.log("message");
        // console.log(this.props);
        // if (this.props.type === "msg") {
        //   var message = <span className="message-username">{this.props.userName}</span>
        //   + <span className="message-content">{this.props.content}</span>;
        // }
      return (
        <div className="message">
          <span className="message-username">{this.props.userName}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      );
  }
}
export default Message;

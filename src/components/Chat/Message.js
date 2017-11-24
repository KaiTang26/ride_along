import React, {Component} from 'react';

class Message extends Component {
  render() {
    // Come back to this
        // console.log("message");
        // console.log(this.props);
        // if (this.props.type === "msg") {
        //   var message = <div className="message-username">{this.props.userName}</div>
        //   + <div className="message-content">{this.props.content}</div>;
        // }
      return (
        <div className="message">
          <div className="message-username">{this.props.userName}</div>
          <div className="message-content">{this.props.content}</div>
        </div>
      );
  }
}
export default Message;

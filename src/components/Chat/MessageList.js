import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <div className="message system">
      <main className="messages">
        {console.log(this.props.messages)}
        {this.props.messages.map((message, index) => (
            <Message key={index} content={message} userName={this.props.currentUser}/>
        ))}
      </main>
    </div>
    );
  }
}
export default MessageList;

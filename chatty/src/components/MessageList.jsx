import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log('MessageList');
    return (
      <div className="message system">
      <main className="messages">
        {this.props.messages.map((message) => (
            <Message key={message.id} content={message.content} userName={message.userName} type={this.props.type}/>
        ))}
      </main>
    </div>
    );
  }
}
export default MessageList;

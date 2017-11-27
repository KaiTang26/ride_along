import React, {Component} from 'react';
import Message from './Message';
import styled from 'styled-components';
import gs from '../GlobalStyles';

const Container = styled.div`
  margin: 1em 0;
`;
const Header = styled.h2`
  font-size: 75%;
  letter-spacing: .5px;
  font-weight: bold;
  font-family: Lato;
  text-transform: uppercase;
  color: ${gs.coral};
  border-bottom: 1px solid;
`;

class MessageList extends Component {
  render() {
    return (
      <div>
      <Header>Ride Chat</Header>
      <main className="messages">
        {this.props.messages.map((message, index) => (
            <Message key={index} content={message} userName={this.props.currentUser}/>
        ))}
      </main>
      </div>
    );
  }
}
export default MessageList;

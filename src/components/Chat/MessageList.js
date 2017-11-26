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
  font-weight: 900;
  font-family: Lato;
  text-transform: uppercase;
  margin: 1em;
  color: ${gs.golden};
  border-bottom: 1px solid;
`;

class MessageList extends Component {
  render() {
    return (
      <Container>
      <Header>Ride Chat</Header>
      <main className="messages">
        {this.props.messages.map((message, index) => (
            <Message key={message.index} content={message} userName={this.props.currentUser}/>
        ))}
      </main>
      </Container>
    );
  }
}
export default MessageList;

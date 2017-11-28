import React, {Component} from 'react';
import Message from './Message';
import styled from 'styled-components';
import gs from '../GlobalStyles';

import UserPic from '../UserProfile/Bill.jpg';

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
  border-bottom: 2px solid;
`;

const ProfilePic = styled.div`
  background: url(${UserPic});
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-size: cover;
  float: left
`;

const Content = styled.div`
  margin-left: 50px;
  width: auto;
  line-height: 1.15;
`;
const Username = styled.h3`
  font-weight: bold;
  font-style: italic;
  color: ${gs.blue};
  margin-bottom: .2em;
`;

const ChatMessage = styled.div`
  overflow: hidden;
  margin: 1em 0;
`;

class MessageList extends Component {
  render() {
    return (
      <div>
      <Header>Ride Chat</Header>
      <main className="messages">
        <ChatMessage>
          <ProfilePic />
          <Content>
            <Username>Bill</Username>
            <div>26 / 10/ 2017 2: 34 pm</div>
            <div>Is it alright if I bring my dog?</div>
          </Content>
        </ChatMessage>
        <div></div>
        {this.props.messages.map((message, index) => (
            <Message key={index} content={message} userName={this.props.currentUser}/>
        ))}
      </main>
      </div>
    );
  }
}
export default MessageList;

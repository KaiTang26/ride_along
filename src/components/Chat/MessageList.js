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
  font-weight: 900;
  font-family: Lato;
  padding-bottom: .1em;
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
  float: left;
`;

const ChatMessage = styled.div`
  overflow: hidden;
  margin: 1em 0;
`;

const Date = styled.p`
  color: #888;
  font-size: 80%;
  margin: 0.15em 1em;
  font-style: italic;
  float: left;
`;

const HeaderMsg = styled.div`
  overflow: hidden;
  float: left;
`;

const Msg = styled.div`
clear: both;
position: relative;
top: -1em;
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
            <HeaderMsg>
            <Username>Bill</Username>
            <Date>26 / 10/ 2017 2: 34 pm</Date>
            </HeaderMsg>
            <Msg>Is it alright if I bring my dog?</Msg>
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

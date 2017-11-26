import React, {Component} from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import UserPic from '../UserProfile/Bill.jpg';


const ChatMessage = styled.div`
  overflow: hidden;
  font-family: Lato;
`;
const ProfilePic = styled.div`
  background: url(${UserPic});
  width: 50px;
  height: 50px;
  border-radius: 2px;
  background-size: cover;
  float: left;
`;
const Content = styled.div`
  float: left;
  margin-left: .5em;
`;
const Username = styled.h3`
  font-weight: bold;
`;


console.log(this.props);
class Message extends Component {
  render() {
      return (

        <ChatMessage>
          <ProfilePic />
          <Content>
            <Username>{this.props.userName}</Username>
            <div className="message-content">{this.props.content}</div>
          </Content>
        </ChatMessage>

      );
  }
}
export default Message;

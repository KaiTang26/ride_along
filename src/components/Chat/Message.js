import React, {Component} from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import UserPic from '../UserProfile/Bill.jpg';
import api from '../utils/api';

let current = new Date();

const ChatMessage = styled.div`
  overflow: hidden;
  margin: 1em 0;
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
  margin-bottom: .2em;
`;


console.log(this.props);
class Message extends Component {

  componentDidMount() {
    (api.userInfo(this.props.userName))
    .then(results =>
      this.setState({
        user:results.data
      }),
    );
  }

  render() {
      return (

        <ChatMessage>
          <ProfilePic />
          {this.state?
            <Content>
              <Username>{this.state.user.first_name}</Username>
              <div className="message-content">{this.props.content}</div>
            </Content>
          :null
          }
        </ChatMessage>

      );
  }
}
export default Message;

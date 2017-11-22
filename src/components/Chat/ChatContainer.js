import React, {Component} from 'react';

class ChatContainer extends Component {
  constructor(props) {
  super(props)
  }

  ComponentDidMount() {
    var socket = io();
  }

  render() {
    return (
      <div>My Chat</div>
    )
  }
}

export default ChatContainer;

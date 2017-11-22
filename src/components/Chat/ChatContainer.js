import React, {Component} from 'react';
import io from 'socket.io-client';

class ChatContainer extends Component {

  constructor(props) {
    super(props)
    var socket =new io("//localhost:3001");

  }



  render() {
    return (

      <div>My Chat{this.props.id.id} {console.log(this.props)}</div>
    )
  }
}

export default ChatContainer;

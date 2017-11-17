import React, {Component} from 'react';

class Notification extends Component {
  render() {
    console.log("Notification");
    return (
      <div> {this.props.formerUser} Changed their name to {this.props.currentUser}</div>
    );
  }
}

export default Notification;

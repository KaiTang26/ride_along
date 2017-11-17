// src/components/Chat/Chat.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import './style.css';

export default class Chat extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Chat', className)} {...props}>
        <div>
          Sample Chatbar
          <input
            placeholder="Your Name (Optional)"/>
          <input
            placeholder="Type a message and hit ENTER"/>
        </div>
        <Link to='/'><button>Home</button></Link>
      </div>
    );
  }
}

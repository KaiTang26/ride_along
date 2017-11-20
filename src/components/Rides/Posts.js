import React, {Component} from 'react';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <span >From: 'start' To: 'end'</span>
        <span>User: 'Example' Rating: '1-5'</span>
        <span>Price: $</span>
      </div>
    );
  }
}
export default Post;

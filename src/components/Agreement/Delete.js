import { Popconfirm, message } from 'antd';
import React, { Component } from 'react';
import api from '../utils/api';



function cancel(e) {
  console.log(e);
  // message.error('Click on No');
}

class Delete extends Component {

  confirm = (e) => {
    console.log(e);
    api.deleteCondition(this.props.tripId, this.props.id);
    window.location.reload();
    message.success('Condition deleted');
    // message.success('Condition deleted');
  }

  render(){
    return (
    <Popconfirm title="Are you sure you want to delete this condition?" onConfirm={this.confirm} onCancel={cancel} okText="Yes" cancelText="No">
      <a href="#">Delete</a>
    </Popconfirm>
    )
  }
}

export default Delete;
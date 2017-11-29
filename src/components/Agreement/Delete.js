import React, { Component } from 'react';
import api from '../utils/api';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';

import { Button, Popup } from 'semantic-ui-react'

const Buttons = styled(Button)`
margin-top: 4em;
background: ${gs.coral} !important;
color: white !important;
border: none;
font-family: Lato;
font-size: 70% !important;
padding: .5em .45em !important;
border-radius: 5px;
font-weight: bold;
border-bottom: 2px solid #b91329 !important;
&:hover {
  cursor: pointer;
  background: #d11a2f !important;
}
`;



class Delete extends Component {

  handleDelete = e => {
    api.deleteCondition(this.props.tripId, this.props.id);
    window.location.reload();
  }
  
  render(){
    return (

      <Popup
        trigger={<Buttons content='Delete' />}
        content={<Buttons 
          color='green' 
          content='Confirm delete' 
          onClick={this.handleDelete}
          />}
        on='click'
        position='top right'
      />
    )


  }
}

// function cancel(e) {
//   console.log(e);
//   // message.error('Click on No');
// }

// class Delete extends Component {

//   confirm = (e) => {
//     console.log(e);
//     api.deleteCondition(this.props.tripId, this.props.id);
//     window.location.reload();
//     message.success('Condition deleted');
//     // message.success('Condition deleted');
//   }

//   render(){
//     return (
//     <Popconfirm title="Are you sure you want to delete this condition?" onConfirm={this.confirm} onCancel={cancel} okText="Yes" cancelText="No">
//       <a href="#">Delete</a>
//     </Popconfirm>
//     )
//   }
// }

export default Delete;
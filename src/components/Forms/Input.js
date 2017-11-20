import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';

const Field = styled.input`

`;

const Label = styled.label`
`;

export default class Input extends Component {

  render() {
    
    return (
      <div>
        <TextField name={this.props.name} placeholder={this.props.placeholder} type={this.props.type} value={this.props.value}/>
        <Label for={this.props.name} />
      </div>
    );
  }
}
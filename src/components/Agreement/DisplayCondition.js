import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles';
import EditCondition from './EditCondition';

export default class DisplayCondition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statement: ""
    }
  }


  render() {
    return (
      <div>
      <p>HI</p>
      {this.props.statements.map((condition) => (
        <div>
          <p>{condition.statement}</p> 
          {this.props.isDriver
            ? <EditCondition statement={condition.statement}/>
            : null }
        </div>
      ))}
    </div>  
    );
  }
}

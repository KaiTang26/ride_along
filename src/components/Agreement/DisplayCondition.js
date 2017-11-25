import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';

const DisplayCondition = (props) => {
  console.log("STATES" ,props.statements);
  return (
    <div>
    <p>HI</p>
    {props.statements.map((condition) => (
      <p>{condition.statement}</p>
    ))}
  </div>  
  )

}

export default DisplayCondition;
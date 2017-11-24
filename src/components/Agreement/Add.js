import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Statement = styled.p`

`;

export default class Agreement extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      statement: "",
    }
  }

  render() {

    return (
      // <Container>
      //   <Statement>
      <Form>
        <Input name="statement" floatingLabelText="Agreement Statment" type="text" onChange={e => this.handleChange(e)}/>
        
        
      </Form>
      //   </Statement>
      // </Container>
    )

  }
}
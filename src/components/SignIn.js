import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import TextField from 'material-ui/TextField';

const Form = styled.form`

`;

const Input = styled(TextField)`
  >label {
    color: red !important;
    border-color: red !important;
  }
`;

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      picture: "",
      email: "",
      drivers_license: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    
    return (
      <Form>
        <Input name="first_name" floatingLabelText="First name" type="text" value={this.state.first_name} onChange={e => this.handleChange(e)}/>
        <Input name="last_name" floatingLabelText="Last name" type="text" value={this.state.last_name} onChange={e => this.handleChange(e)}/>
        <Input name="email" floatingLabelText="Email" type="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
        <Input name="password" floatingLabelText="Password" type="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
        <Input name="drivers_license" floatingLabelText="Drivers Licence Number" type="text" value={this.state.drivers_license} onChange={e => this.handleChange(e)}/>
      </Form>
    );
  }
}
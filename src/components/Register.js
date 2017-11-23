import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import api from './utils/api';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const Button = styled(RaisedButton)`
  color: white !important;
  background-color: transparent !important;
  box-shadow: none !important;
  font-family: Lato !important;
  float: right;
  > button {
    background-color: transparent !important;
    color: white !important;
    font-family: Lato !important;
    padding: .5em !important;
  }
  > button div div span {
    color: white !important;
    text-transform: none !important;
    font-size: 1rem !important;
  }
  > button div div span:hover {
    color: skyblue !important;
    
  }
`;

const Input = styled(TextField)`
`;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      picture: "",
      email: "",
      drivers_license: "",
      about: "",
      open: false
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
    api.register(this.state)
    .then(console.log(this.state))
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (

      <div>
        <Button label="Register" onClick={this.handleOpen} />
        
        <Dialog
          title="Register to start your trip!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >   

        <Form>
          <Input name="first_name" floatingLabelText="First name" type="text" value={this.state.first_name} onChange={e => this.handleChange(e)}/>
          <Input name="last_name" floatingLabelText="Last name" type="text" value={this.state.last_name} onChange={e => this.handleChange(e)}/>

          <Input name="password" floatingLabelText="Password" type="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
          
          <Input name="confirm_password" floatingLabelText="Confirm Password" type="password" /*value={this.state.password} onChange={e => this.handleChange(e)} */ />

          <Input name="drivers_license" floatingLabelText="Driver's Licence #" type="text" value={this.state.drivers_license} onChange={e => this.handleChange(e)}/>
          
          <Input name="email" floatingLabelText="Email" type="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
          <Input name="about" floatingLabelText="A bit about you" type="text" value={this.state.about} multiLine={true} rows={2} onChange={e => this.handleChange(e)}/>
        </Form>

        </Dialog>
      </div>  
    );
  }
}
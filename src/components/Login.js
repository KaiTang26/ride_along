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

const Input = styled(TextField)`
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
    padding: .5em !important;
    font-family: Lato !important;
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
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      open: false
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  userLogin = ()=>{
    // debugger
    // this.setState({open: false});
    api.login(this.state)
    .then(res=>{
      if(res.data){
        this.setState({open: false});
        console.log(res.data)
      }else{
        this.setState({open: true});
        console.log('###res', res.data);
      } 
    })
  }

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
        onClick={this.userLogin}
      />,
    ];

    return (

      <div>
        <Button label="Login" onClick={this.handleOpen} />
        
        <Dialog
          title="Login to start your trip!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >   

        <Form>
          <Input name="email" floatingLabelText="Email" type="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
          <Input name="password" floatingLabelText="Password" type="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
        </Form>

        </Dialog>
      </div>  
    );
  }
}
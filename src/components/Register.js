import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import api from './utils/api';
// import { Redirect } from 'react-router-dom';
import Message from './Message.js';
import browserHistory from '../history';

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
      open: false,
      signUP:false,
      about: "",
     
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  userSignUp = ()=>{
    api.register(this.state)
    .then(res => {
      if(res.data){
        this.setState(
          {open: false,
           signUp:true});
        console.log(this.state)
      }else{
        this.setState({open: true});
        // console.log('###res', res.data);
      } 
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleProfile = e => {
    browserHistory.push("/profile/"+localStorage.getItem("user_id"))
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
        onClick={this.userSignUp}
      />,
    ];

    return (

      <div>
        { localStorage.getItem("user_id")?
          <Button label="Profile" onClick={this.handleProfile} />:
          <Button label="Register" onClick={this.handleOpen} />}
        
        
        <Dialog
          title="Register to start your trip!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >   

        <Form>
          <Input
            name="first_name"
            floatingLabelText="First name"
            type="text"
            value={this.state.first_name}
            onChange={e => this.handleChange(e)}
          />
          <Input
            name="last_name"
            floatingLabelText="Last name"
            type="text"
            value={this.state.last_name}
            onChange={e => this.handleChange(e)}
          />
          <Input
            name="email"
            floatingLabelText="Email"
            type="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <Input
            name="password"
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <Input name="confirm_password" 
                 floatingLabelText="Confirm Password" 
                 type="password" /*value={this.state.password} onChange={e => this.handleChange(e)} */ />
          <Input
            name="drivers_license"
            floatingLabelText="Driver's Licence Number"
            type="text"
            value={this.state.drivers_license}
            onChange={e => this.handleChange(e)}
          />
      
          <Input name="about" 
                 fullWidth={true}
                 floatingLabelText="A bit about you" 
                 type="text" 
                 value={this.state.about} 
                 multiLine={true} 
                 rows={4} 
                 onChange={e => this.handleChange(e)}/>
        </Form>
        </Dialog>

       

        { this.state.signUp && <Message />}
        
      </div>  
    );
  }
}
import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import api from './utils/api';
import Profile from './UserProfile/UserProfile.js'
import { Link } from 'react-router-dom';
import browserHistory from '../history';

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
    color: ${gs.green} !important;
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
        const id = res.data.id
        localStorage.setItem("user_id", id);
        localStorage.setItem("drivers_license", res.data.drivers_license);

        browserHistory.push("/profile/"+id)

        console.log(browserHistory.location.pathname)
      }else{
        this.setState({open: true});
        console.log('###res', res.data.id);
        //
      }
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogout = e => {
    localStorage.clear();
    browserHistory.push("/")
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

        { localStorage.getItem("user_id")?
          <Button label="Logout" onClick={this.handleLogout} />:
          <Button label="Login" onClick={this.handleOpen} />}

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
        {/* {localStorage.getItem("user_id") && <Link to = "/profile/1" />} */}

        {/* <Profile /> */}
      </div>
    );
  }







}

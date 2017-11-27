import { Modal, Button } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import TextField from 'material-ui/TextField';

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

export default class LoginEx extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,      
    password: "",
    email: ""
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

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
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>

          { localStorage.getItem("user_id")?
          <Button label="Logout" onClick={this.handleLogout} />:
          <Button label="Login" onClick={this.handleOpen} />}

        <Button type="primary" onClick={this.showModal}>Login</Button>
        <Modal title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          cancelText = "Cancel"
          okText = "Log me in!"
        >

          <Form>
          <Input name="email" floatingLabelText="Email" type="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
          <Input name="password" floatingLabelText="Password" type="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
        </Form>


        </Modal>
      </div>
    );
  }
}


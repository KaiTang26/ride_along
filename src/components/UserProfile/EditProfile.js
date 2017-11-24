import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import api from '../utils/api';

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const Input = styled(TextField)`
`;

const Button = styled(RaisedButton)`
  color: white !important;
  background-color: ${gs.golden} !important;
  border-radius: 4px !important;
  font-family: Lato !important;
  > button {
    color: white !important;
    font-family: Lato !important;
    background-color: ${gs.golden} !important;
    border-radius: 4px !important;
  }
  > button div div span {
    color: white !important;
    text-transform: none !important;
    font-size: 1rem !important;
`;

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class EditProfile extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      picture: "",
      email: "",
      drivers_license: "",
      about: "",
      open: false
    }
  };

  handleSubmit = () => {
    api.updateUserInfo(this.state)
    .then(console.log(this.state))
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (e) => {
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
        onClick={this.handleClose}
      />
      ];
  
      return (
        <div>
          <Button label="Edit Profile" onClick={this.handleOpen} />
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            
          <Form>
            <Input name="first_name" floatingLabelText="First name" type="text" defaultValue={this.props.info.first_name} onChange={e => this.handleChange(e)}/>
            <Input name="last_name" floatingLabelText="Last name" type="text" defaultValue={this.props.info.last_name} onChange={e => this.handleChange(e)}/>

            <Input name="password" floatingLabelText="Password" type="password" onChange={e => this.handleChange(e)}/>

            <Input name="confirm_password" floatingLabelText="Confirm Password" type="password" /*value={this.state.password} onChange={e => this.handleChange(e)} */ />

            <Input name="drivers_license" floatingLabelText="Driver's Licence #" type="text" defaultValue={this.props.info.drivers_license} onChange={e => this.handleChange(e)}/>
            
            <Input name="email" floatingLabelText="Email" type="email" defaultValue={this.props.info.email} onChange={e => this.handleChange(e)}/>
            <Input name="about" fullWidth={true}floatingLabelText="A bit about you" type="text" value={this.state.about} multiLine={true} rows={4} onChange={e => this.handleChange(e)}/>
          </Form>


          </Dialog>
        </div>
      );
    }
  }
  
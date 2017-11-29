import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import api from '../utils/api'

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
  
  > button {
    background-color: transparent !important;
    color: white !important;
    padding: .5em !important;
    font-family: Lato !important;
  }
  > button div div span {
    color: ${gs.green} !important;
    text-transform: none !important;
    font-size: 1.15rem !important;
    font-weight: bold !important;
    margin-left: .25em !important;
  }
  > button div div span:hover {
    color: ${gs.green} !important;
  }
`;
export default class Login extends Component {
  constructor(props) {
    super(props);
// Need to change content to review_text so
// the post works
    this.state = {
      rating: "",
      review_text: "",
      trip_id: this.props.trip_id,
      open: false
    }
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    this.handleClose();
    api.postReview(this.state.trip_id, localStorage.getItem("user_id"), this.state)
    .then()
  }

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
        onClick={this.handleSubmit}
      />,
    ];

    return (

      <div>
        <Button label="Review this Trip" onClick={this.handleOpen} />

        <Dialog
          title="Tell us about your trip!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >

        <Form>
          <Input name="rating"
            floatingLabelText="Rating"
            type="text"
            value={this.state.rating}
            onChange={e => this.handleChange(e)}/>
          <Input name="review_text"
            floatingLabelText="Review"
            type="textarea"
            value={this.state.review_text}
            onChange={e => this.handleChange(e)}/>
        </Form>

        </Dialog>
      </div>
    );
  }
}

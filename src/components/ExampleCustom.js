import React from 'react';
import SkyLight from 'react-skylight';
import styled from 'styled-components';
import gs from './GlobalStyles.js';
import TextField from 'material-ui/TextField';

const Form = styled.form`
max-width: 800px;
margin: 0 auto;
`;

const Input = styled(TextField)`
`;

class ExampleCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      picture: "",
      email: "",
      drivers_license: "",
      open: false
    }
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {

    var myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '50%',
      height: '300px',
      marginTop: '-150px',
      marginLeft: '-25%',
    };

    return (
      <div>
        <section>
          <button onClick={() => this.customDialog.show()}>Register</button>
        </section>
        <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref={ref => this.customDialog = ref} title="Register to start your trip!">
        <Form>
          <Input name="first_name" floatingLabelText="First name" type="text" value={this.state.first_name} onChange={e => this.handleChange(e)}/>
          <Input name="last_name" floatingLabelText="Last name" type="text" value={this.state.last_name} onChange={e => this.handleChange(e)}/>
          <Input name="email" floatingLabelText="Email" type="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
          <Input name="password" floatingLabelText="Password" type="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
          <Input name="drivers_license" floatingLabelText="Driver's Licence Number" type="text" value={this.state.drivers_license} onChange={e => this.handleChange(e)}/>
        </Form>

        </SkyLight>
      </div>
    )
  }
}

ExampleCustom.displayName = 'ExampleCustom';

export default ExampleCustom;
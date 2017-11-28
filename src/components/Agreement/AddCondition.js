import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import TextField from 'material-ui/TextField';
import { Button, Modal } from 'semantic-ui-react';
import api from '../utils/api';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Statement = styled.p`

`;

const Input = styled(TextField)`
`;

const Buttons = styled(Button)`
background: ${gs.green} !important;
color: white !important;
border: none;
font-family: Lato;
margin: 0em 0 5em !important;
font-size: 85% !important;
padding: .5em .45em !important;
border-radius: 5px;
font-weight: bold;
border-bottom: 1px solid #1a7452 !important;
&:hover {
  cursor: pointer;
  background: #239a6c !important;
  border-bottom: #1a7452 !important;
  border-top: 1px solid white !important;
}
`;

export default class AddCondition extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      condition: "",
      open: false
    }
  };

  handleChange = e => {
    this.setState({
      condition: e.target.value
    });
  };

  handleSubmit = e => {
    api.addCondition(this.props.tripId, this.state);
    this.setState({open: false});
    window.location.reload();
  };


  closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
    this.setState({ closeOnEscape, closeOnRootNodeClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnRootNodeClick } = this.state

    return (
      <div>
        <Buttons onClick={this.closeConfigShow(true, false)}>+ Condition</Buttons>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnRootNodeClick={closeOnRootNodeClick}
          onClose={this.close}
        >
          <Modal.Header>
          Add a Condition
          </Modal.Header>
          <Modal.Content>
          <Modal.Description>
            <p>State one condition you would like your passengers to agree to:</p>
            <Input 
              name="condition" 
              floatingLabelText="Condition" 
              type="text" 
              fullWidth={true}
              value={this.state.condition} 
              onChange={e => this.handleChange(e)}/>
          </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>Cancel</Button>
            <Button positive labelPosition='right' icon='checkmark' content='Submit' onClick={this.handleSubmit} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


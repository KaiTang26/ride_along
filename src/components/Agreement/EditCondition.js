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


export default class EditCondition extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      condition: this.props.statement,
      open: false
    }
  }

  handleChange = e => {
    this.setState({
      condition: e.target.value
    });
  }

  handleSubmit = e => {
    api.editCondition(this.props.tripId, this.props.id, this.state);
    this.setState({open: false});
    window.location.reload();
  }


  closeConfigShow = (closeOnEscape, closeOnRootNodeClick) => () => {
    this.setState({ closeOnEscape, closeOnRootNodeClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnRootNodeClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>Edit Condition</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnRootNodeClick={closeOnRootNodeClick}
          onClose={this.close}
        >
          <Modal.Header>
          Edit Your Condition
          </Modal.Header>
          <Modal.Content>
          <Modal.Description>
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


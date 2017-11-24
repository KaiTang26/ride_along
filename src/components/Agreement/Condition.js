import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import TextField from 'material-ui/TextField';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'


const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Statement = styled.p`

`;

const Input = styled(TextField)`
`;


export default class Condition extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      condition: "",
      name: "bill"
    }
  };

  handleChange = e => {
    this.setState({
      condition: e.target.value
    });
  };


  render() {

    return (
    
      <Modal trigger={<Button>Add Condition</Button>}>
        <Modal.Content image>
          <Modal.Description>
            <Header>Add a Condition</Header>
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
          <Button primary>
            Submit <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
      
    )

  }
}
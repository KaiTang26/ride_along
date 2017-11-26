import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'
import api from '../utils/api'

export default class RadioToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agree: false
    }
  }

  
  handleToggle = e => {
    api.passengerAgree(this.props.tripId, this.props.condition, this.props.user, this.state.checked)
  }

  render() {

    return(
      <Radio toggle onChange={this.handleToggle} />
    )
  }

}

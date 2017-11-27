import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'
import api from '../utils/api'
import Toggle from 'material-ui/Toggle';


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

export default class RadioToggle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      // check to see if user has already first agreed
      agreeInitialized: false,
      
    }
  }

  
  handleToggle = e => {
    // if (this.state.checked === null) {
    //   this.setState({checked: true});
    //   api.passengerAgree(this.props.tripId, this.props.condition, this.props.user, this.state.checked)
    // } else if (this.state.checked === false) {
    //   this.setState({checked: true});
    //   api.updateAgree(this.props.tripId, this.props.condition, this.props.user, this.state.checked)
    // } else if (this.state.checked === true) {
    //   this.setState({checked: false});
    //   api.updateAgree(this.props.tripId, this.props.condition, this.props.user, this.state.checked)
    // }
    
    {this.state.checked === false
      ? this.setState({checked: true})
      : this.setState({checked: false})
    }
    if (!api.passengerAgree(this.props.tripId, this.props.condition, this.props.user, this.state.checked)) {
      api.updateAgree(this.props.tripId, this.props.condition, this.props.user, this.state.checked)
    }
      console.log(this.state.checked)
  }

  handleToggle = (event) => {
    // here's your checked Value
    console.log(event.target.getAttribute('data-isToggled') )
  }

  render() {

    return(

      <div>
      {/* <Radio toggle onChange={this.handleToggle} 
  onToggle={this.handleToggle} />
   */}
      <div style={styles.block}>
      <Toggle
      label="Toggled by default"
      style={styles.toggle}
      onToggle={this.handleToggle}
      data-isToggled={this.state.Toggled}
      toggled={this.state.Toggled}
    />
    </div>
    </div>
    )
  }

}

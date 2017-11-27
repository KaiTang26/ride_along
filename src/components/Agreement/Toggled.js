import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import api from '../utils/api'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckAgree extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  handleCheck = e => {
    // check if there is already a database entry for this agreement condition
    api.passengerAgree(this.props.tripId, this.props.condition, this.props.user, this.state)
    .then(result => console.log("new thing",result));
    // console.log("passgnerggree", PA, typeof(PA))
    // if (api.passengerAgree(this.props.tripId, this.props.condition, this.props.user, this.state)
    // .then() === false) {
    //   console.log("INSIDE IF")
    //   api.updateAgree(this.props.tripId, this.props.condition, this.props.user, this.state)
    // }
  }
  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Agree"
          style={styles.checkbox}
          onClick={this.handleCheck}
        />
        
      </div>
    );
  }
}

export default CheckAgree;
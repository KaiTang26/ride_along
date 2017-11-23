import React, { Component } from 'react';
import classnames from 'classnames';
import Posts from './Posts'
import api from '../utils/api';
import { Route, Redirect } from 'react-router';
import Search from './Search';

export default class Rides extends Component {

  constructor(props){
    super(props);
    this.state = {
        cities: ["Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo",
        "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington",
        "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal",
         "Trois-Riveres", "Quebec"],
        rides: [],
        start: "Toronto",
        end: "Windsor",
        detail: 'all'
    }
  }

  componentWillMount(){
    api.getRides()
    .then(result => {
      let rides = result.data
      this.setState({rides})
      console.log(rides);
    })
  }

  render () {
    const { className, ...props } = this.props;

    return (
    <div>
      <h1>Find a Ride</h1>

      <Search params={this.state} _handleInputChange = {this._handleInputChange} _handleSubmit = {this._handleSubmit}/>
      <Posts rides = {this.state.rides} _details={this._details}/>

    </div>
    )
  }

// The nav problem do conditional rendering or do history push, this is an object
// within props, you cna specify that you want to push a certain url on click and it
// move you to that page

// If we do conditional rendering change to set the state of Details
// then put a function into the render that conditionally renders
  // _details=(event) => {
  //   api.getRide(1)
  //
  // }


  _handleInputChange=(event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(value);
      this.setState({
        [name]: value,
      })
  }


// Or maybe I do a fetch with the params and return a list of trips
  _handleSubmit=(event) => {
    event.preventDefault();

    alert("start point "+ this.state.start + " endpoint: "+ this.state.end);


    // fetch('/:id', {
    //   method: 'get',
    //   body: {
    //
    //   }
    // })
    // var state = this.state
    // for (var i = 0; i < state.postedTrips.length; i++) {
    //     if (state.postedTrips[i].start === state.start && state.postedTrips[i].end === state.end) {
    //       alert("hey");
    //     }
    // }
  }
}

import React, { Component } from 'react';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "Toronto",
      end: "Windsor"
    }
  };

  render () {


  // Find matching routes
  // const start = this.state.start;
  // const end = this.state.end;
  // const availableRides = this.props.params.rides;
  // const cities = this.props.params.cities;
  
  // // // Get array position of starting and end points
  // const startPos = cities.indexOf(start);
  // const endPos = cities.indexOf(end);

  // // // Find matches based on array positions
  // const matchArr = [];
  // availableRides.forEach(function(ride) {
  //   if (cities.indexOf(ride.start_location) <= startPos
  //       && cities.indexOf(ride.end_location >= endPos)) {
  //     matchArr.push(ride);
  //   }
  // });
  // console.log("MATCH ARR: ", matchArr);    
  

  return (
  <div>
    <h1>Find a Ride</h1>


    <form onSubmit={this._handleSubmit}>
      <label>
      Pickup Location:
        <select name="start"  onChange={this._handleInputChange}>
          { cities.map((ele, i)=>{
              return <option value={ele} key={i}>{ele}</option>
          })}
        </select>
      </label>

      <label>
      Drop Off:
        <select name="end"  onChange={this._handleInputChange}>
          { cities.map((ele, i)=>{
              return <option value={ele} key={i}>{ele}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Search Trips" />
    </form>

      {/* <Search cities = {cities} _handleInputChange = {this._handleInputChange} _handleSubmit = {this._handleSubmit}/> */}

    </div>
    )
  }


  _handleInputChange=(event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value,
    })
  }


}

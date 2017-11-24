import React, { Component } from 'react';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'


export default class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     start: "Toronto",
  //     end: "Windsor"
  //   }
  // };

  render () {  

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
      {/* <input type="submit" value="Search Trips" /> */}
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

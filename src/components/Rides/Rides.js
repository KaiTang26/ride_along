import React, { Component } from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import SearchResults from './SearchP';
import api from '../utils/api';
import { Route, Redirect } from 'react-router';
import CalculateGeocode from '../Trip/Calculategeo.js';

const Search = (props) => (
  <form onSubmit={props._handleSubmit}>
    <label>
    Pickup Location:
      <select name="start"  onChange={props._handleInputChange}>
        { props.cities.map((ele, i)=>{
            return <option value={ele} key={i}>{ele}</option>
        })}
      </select>
    </label>

    <label>
    Drop Off:
      <select name="end"  onChange={props._handleInputChange}>
        { props.cities.map((ele, i)=>{
            return <option value={ele} key={i}>{ele}</option>
        })}
      </select>
    </label>
    <input type="submit" value="Search Trips" />
  </form>
)

export default class Rides extends Component {

  constructor(props){
    super(props);
    this.state = {
      rides: [],
      origin:[],
      destination:[],
      direction: '',
      detail: 'all',
      showAll: true
    }
  }

  componentWillMount(){
    api.getRides()
    .then(result => {
      let rides = result.data
      this.setState({rides})
      console.log(rides);
    });
  }

  render () {
    const { className, ...props } = this.props;

    const Button = styled.button`
    `;

    return (
    <div>
      <h1>Find a Ride</h1>
      <br />
      <br />
      <CalculateGeocode updateAddress={this._handleLocationSearch}/>

      {/* <Search cities = {this.state.cities} _handleSubmit = {this._handleSubmit}/> */}
    
      <br /> 

      {this.state.showAll 
        ? <Posts rides = {this.state.rides} />
        : <div>
         <SearchResults params={this.state}/> 
          <Button onClick={this._handleAll}>Show All</Button>
          </div>
      }

    </div>
    );
  }

  _handleAll = e => {
    this.setState({ 
      showAll: true
    });
  }

  _handleInputChange=(event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value,
    });
  }

  // _handleSubmit=(event) => {
  //   event.preventDefault();
  //   this.setState({
  //     showAll: false
  //   });
  // }

  _handleLocationSearch=(address)=>{
    console.log(address)
    this.setState({
    origin:address.origin,
    destination:address.destination,
    direction: address.direction,
    showAll: false
    })      
  }









}

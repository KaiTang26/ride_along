import React, { Component } from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import SearchResults from './SearchP';
import api from '../utils/api';
import { Route, Redirect } from 'react-router';
import CalculateGeocode from '../Trip/Calculategeo.js';
import Menu from '../Menu';


const Container = styled.div`
  margin-top: 65px;
`;

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
      start_location:'',
      end_location:'',
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
      <Menu />
      <Container>
        <h1>Find a Ride</h1>
        <br />
        <br />
        <CalculateGeocode updateAddress={this._handleLocationSearch}/>
        <br /> 

        {this.state.showAll 
          ? <Posts rides = {this.state.rides} />
          : <div>
          <SearchResults params={this.state}/> 
            <Button onClick={this._handleAll}>Show All</Button>
            </div>
        }
      </Container>
    </div>
    );}

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

  _handleLocationSearch=(address)=>{
    this.setState({
    start_location: address.start_location,
    end_location: address.end_location,
    origin:address.origin,
    destination:address.destination,
    direction: address.direction,
    showAll: false
    })
    console.log(this.state)
  }

}

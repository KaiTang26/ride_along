import React, { Component } from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import SearchResults from './SearchResults';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'

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
      cities: ["", "Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo",
      "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington",
      "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal",
        "Trois-Riveres", "Quebec"],
      rides: [],
      start: "",
      end: "",
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

      <Search cities = {this.state.cities} _handleInputChange = {this._handleInputChange} _handleSubmit = {this._handleSubmit}/>
    
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
    this.setState({ showAll: true });
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

  _handleSubmit=(event) => {
    event.preventDefault();
    this.setState({
      showAll: false
    });

  }
}

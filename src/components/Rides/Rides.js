import React, { Component } from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import SearchResults from './SearchP';
import api from '../utils/api';
import { Route, Redirect } from 'react-router';
import CalculateGeocode from '../Trip/Calculategeo.js';
import Menu from '../Menu';
import gs from '../GlobalStyles.js';
import road from './road.gif';
import roadpic from './road2.jpg';

const Background = styled.div`
  // background: url(${roadpic}) no-repeat;
  // background-size: cover;
  background: #dfe7e3;
  width: 100%;
  height: auto;
  padding-bottom: 13em;
`;

const Container = styled.div`
  margin-top: 60px;
  padding: 3em;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
  background: white;
`;

const Left = styled.div`
  float: left;
  width: 50%;
`;

const Right = styled.div`

// background: url(${roadpic}) no-repeat;
// background-size: cover;
  background: url(${road}) no-repeat;
  width: 50%;
  height: 500px;
  float: right;
  background-position: center;
  padding: 5em;
  // position: fixed;
`;

const H1 = styled.h1`
  font-weight: 900;
  // color: #444;
  // color: ${gs.red};
  font-size: 145%;
  margin: 3em 0 1.5em !important;

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
    <Background>
      <Menu />
      <Container>
        <Left>
          <H1>Find a Ride</H1>
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
        </Left>

        <Right>

        </Right>

      </Container>
    </Background>
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

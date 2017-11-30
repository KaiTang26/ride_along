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
import { Icon } from 'semantic-ui-react';

const Background = styled.div`
  // background: url(${roadpic}) no-repeat;
  // background-size: cover;
  background: #dfe7e3;
  width: 100%;
  height: auto;
  // padding-bottom: 13em;
`;

const Container = styled.div`
  margin-top: 60px;
  padding: 0.75em 3em 0;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto 4em;
  background: #fefefe;
  min-height: 900px;
`;

const Left = styled.div`
  float: left;
  width: 55%;
`;

const Right = styled.div`
// background: url(${roadpic}) no-repeat;
// background-size: cover;
  background: url(${road}) no-repeat;
  width: 45%;
  height: 400px;
  background-position: right;
  position: absolute;
  right: -3.5em;
  top: 2.25em;
`;
const Find = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 400px;
  padding-top: 1em;
`;
const H1 = styled.h1`
  font-weight: 900;
  // color: #444;
  // color: ${gs.red};
  font-size: 170%;
  margin: 3em 0 1.5em !important;
`;
const Bottom = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 400px;
`;
const Button = styled.button`
  margin: 4em 0 3em;
  background: ${gs.green};
  color: white;
  border: none;
  font-family: Lato;
  padding: .75em .8em;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 2px solid #155b40;
  &:hover {
    cursor: pointer;
    background: #239a6c;
    border-bottom: #155b40;
    border-top: 2px solid white;
  }
`;

const Footer = styled.div`
background: ${gs.green};
color: white;
font-family: Merriweather;
font-weight: bold;
width: 100%;
font-size: 115%;
padding: 1.15em 1.5em;
overflow: hidden;
position: relative;
z-index: 6;
text-align: center;
>ul {
  margin: 1.25em 0 1.35em; 
  font-family: Lato;}
>ul li {
  display: inline-block;
  margin: 0.5em 1em;
  font-style: italic;}
  >li:hover {
    // color: $green;
    cursor: pointer;}
>p {
  font-size: 90%}
`
const A = styled.a` 
margin: 0 .25em 0 .5em;
>a {
color: ${gs.green} !important;
}
// font-style: italic;
`;

const Iconss = styled(Icon)`
margin: 0.25em 1em  0 !important;
`
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


    return (
    <Background>
      <Menu />
      <Container>

        <Find>
          <Left>

          <H1>Find a Ride</H1>          
          <CalculateGeocode updateAddress={this._handleLocationSearch}/>        </Left>

        <Right>
            {/* image */}
        </Right>

          </Find>
        <Bottom>
          {this.state.showAll 
            ? <Posts rides = {this.state.rides} />
            : <div>
            <SearchResults params={this.state}/> 
              <Button onClick={this._handleAll}>Show All</Button>
              </div>
          }
         

        </Bottom>
      </Container>
                
<Footer>
  <Iconss  name='facebook square ' size='large'/>
  <Iconss  name='twitter ' size='large'/>
  <Iconss  name='instagram' size='large'/>
  <Iconss  name='snapchat ' size='large'/>
  <ul>
    <li>
        FAQ
    </li>
    <li>
        Contact
    </li>
    <li>
      T&Cs
    </li>
    <li>
        Press
    </li>    
    <li>
        Jobs
    </li>
    <li>
        Privacy
    </li>
  </ul>

  <p>© 2017  Ride Along Inc.</p>
</Footer> 
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

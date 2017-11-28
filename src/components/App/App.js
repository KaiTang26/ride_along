import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import api from '../utils/api';
import search from './search.gif';
import chat from './messages.gif';
import car from './car2.gif';
import map from './map.gif';
import styled from 'styled-components';
// var apii = require('../utils/apii')
import { Icon } from 'semantic-ui-react';

import './overrides.css';
import FrontHeader from '../Front/FrontHeader';
import gs from '../GlobalStyles.js';

const SearchGif = styled.div`
  background: url(${search}) no-repeat;
  background-size: cover;
  width: 280px;
  height: 240px;
  margin: 0 auto;
  position: relative;
  right: 1em;
`;
const Icons = styled(Icon)`
color: ${gs.green};
position: relative;
bottom: 2px;
`


const Chat = styled.div`
background: url(${chat}) no-repeat;
background-size: cover;
width: 290px;
height: 230px;
margin: 0 auto;
position: relative;
right: 1em;
`;
const Car = styled.div`
background: url(${car}) no-repeat;
background-size: cover;
width: 280px;
height: 230px;
margin: 0 auto;
position: relative;
right: 1em;
`;
// const Map = styled.div`
// background: url(${map}) no-repeat;
// // background-size: cover;
// width: 150px;
// height: 150px;
// margin: 0 auto;
// `;

const Container = styled.div`
float: left;
font-family: Merriweather;
font-weight: bold;
text-align: center;
width: 33%;
overflow: hidden;
padding: 0 3em 8em;
`
const P = styled.p`

`;
const Footer = styled.div`
  background: ${gs.green};
  color: white;
  font-family: Merriweather;
  font-weight: bold;
  width: 100%;
  padding: 1.15em 1.5em;
  overflow: hidden;
  position: relative;
  z-index: 6;
  text-align: center;
  >ul {
    margin: .8em 0 1.15em; 
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
  >a:hover {
    color: ${gs.coral}!important;
  }
  // font-style: italic;
`;

const Iconss = styled(Icon)`
  margin: 0.25em 1em  0 !important;
`

class App extends Component {

  render() {
    // const { className, ...props } = this.props;
    return (

        // <div className={classnames('App', className)} {...props}>
        <div>
          <FrontHeader />

          {/* <Link to='profile'><button>USER PROFILE PAGE</button></Link> */}
          {/* <Container>
            <SearchGif/>
            
            
        <A><Icons fitted name='chevron right' size='tiny'/>
        <Icons fitted name='chevron right' size='tiny'/>  <Link to='/ride'>
  
         Find Ride</Link></A> or  
            <A><Link to='/trip'>
   
        Post a Ride</Link></A>

          </Container>
        <Container>
          <Chat/>
          <P><Icons fitted name='chevron right' size='tiny'/>
        <Icons fitted name='chevron right' size='tiny'/>  Negotiate the terms with your fellow travellers</P>
        </Container>
        <Container>
          <Car/>
          <P><Icons fitted name='chevron right' size='tiny'/>
        <Icons fitted name='chevron right' size='tiny'/>  Enjoy the ride!</P>
        </Container>
         */}

          
{/* <Footer>
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
</Footer> */}
        
       

          {/* <button onClick={this.props.actions.expressTest}>Test if Express is working</button> */}
      
         
          
        </div>


    );
  }

  expressTest(){
    api.fetchExpressTest()
      .then((result)=>{
        console.log(result)
      })
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router'
import { Link } from 'react-router-dom';

// import CalculateGeocode from '../Trip/Calculategeo.js';

const Text = styled.p`
  margin: 1em;
`;

const Results = styled.div`
`;

const Info = styled.p`
`;

const Ride = styled.div`
  border: 2px solid black;
`;

const Label = styled.h4`
  font-size: 80%;
  text-transform: uppercase;
  margin: 2em 0 .5em;
  font-style: Lato;
`
const ResultsText = styled.div`
`;

// the pnpoly algorithm
function testInside (point, vs) {
  var x = point[0], y = point[1];
  
      var inside = false;
  
      for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
          var xi = vs[i][0], yi = vs[i][1];
          var xj = vs[j][0], yj = vs[j][1];
  
          var intersect = ((yi > y) != (yj > y))
              && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
  
          if (intersect) {
              inside = !inside
          };
      }
      return inside;
  };



const SearchResults = (props) => {
  const origin = props.params.origin;
  const destination = props.params.destination;
  const direction = props.params.direction;
  const availableRides = props.params.rides;
  const matchArr = [];

  availableRides.forEach((ele)=>{
    console.log("user diresction", direction)
    console.log("dirver diresction", ele.direction)
    if(direction===ele.direction){
      console.log("true")

      console.log(testInside(origin, ele.polygon), testInside(destination, ele.polygon))
      
      const originTest = testInside(origin, ele.polygon) || ((Math.abs(origin[0]-ele.origin[0])<0.03)&&(Math.abs(origin[1]-ele.origin[1])<0.03))

      const destinationTest = testInside(destination, ele.polygon) || ((Math.abs(destination[0]-ele.destination[0])<0.03)&&(Math.abs(destination[1]-ele.destination[1])<0.03))
  
      console.log("origin", originTest)
      console.log("destination", destinationTest)

      if(originTest && destinationTest){
        matchArr.push(ele);
        
      }
    }
  })


  console.log("MATCH ARR: ", matchArr);
  
  const resultsNum = matchArr.length;

  return (

    <div> 

      <ResultsText>
        <Text>You searched for 
          <br/>From ----- {props.params.start_location}
          <br/>To ------ {props.params.end_location}
        </Text>

          { !(resultsNum) 
            ? <Text>There is no available ride that overlaps with your trip! </Text>
            : <Text>There are {resultsNum} available rides that overlap with your trip! </Text>
          }

          <Text>
            Contact the driver on the trip's page to negotiate arrangements.
          </Text>
        
        </ResultsText>

        <Results>

          { (matchArr)&&
            matchArr.map((ride) => (
            <Ride key={ride.id}>
              <Label>Leaving:</Label> {ride.date}
              <Label>Time</Label> {ride.time}
              <Label>From:</Label> {ride.start_location} To: {ride.end_location}
              <Link to={`/ride/${ride.id}`}><button>View Details</button></Link>
            </Ride>
          ))}
        </Results>
         
    </div>) 
}

export default SearchResults;
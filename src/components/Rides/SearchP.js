import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router'
import { Link } from 'react-router-dom';
import gs from '../GlobalStyles.js';

// import CalculateGeocode from '../Trip/Calculategeo.js';

const Text = styled.p`
  margin: 1em 0;
`;

const Results = styled.div`
  margin-top: 2em;
`;

const Info = styled.p`
`;
const H2 = styled.h2`
  font-weight: 900;
  font-size: 124%;
  color: ${gs.golden};
  font-size: 110%;
  font-style: italic;
  margin: 1em 0 1.5em !important;
`;

const Ride = styled.div`
  padding: .8em 0;
  border-top: 1px solid #f5d398;
`;

const Label = styled.h4`
  font-size: 75%;
  font-family: Lato;
  text-transform: uppercase;
  margin-bottom: .85em;
  color: ${gs.golden};
  display: inline-block;
  margin-right: .5em;
  font-weight: bold;
`
const ResultsText = styled.div`
`;

const Field = styled.div`
margin: .5em 0;
`;

const To = Label.extend`
  margin-left: .5em;
  margin-right: .3em;
`

const P = styled.p`
  display: inline-block;
  > em {
    font-weight: 900;
  }
`;

const Button = styled.button`
  background: ${gs.golden};
  color: white;
  border: none;
  font-family: Lato;
  font-size: 75%;
  padding: .75em .8em;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 1px solid #a87010;
  &:hover {
    cursor: pointer;
    background: #d28c14;
    border-bottom: #a87010;
    border-top: 1px solid white;
  }
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

  // the boundary condition is set in here
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
        <H2>Search Results</H2>
        {/* <Text>You searched for 
          <br/>From ----- {props.params.start_location}
          <br/>To ------ {props.params.end_location}
        </Text> */}

          { !(resultsNum) 
            ? <div><Text>There is no available ride that overlaps with your trip! </Text>
            <Text>
            Please try another search.
          </Text></div>
            : <div><Text>There are {resultsNum} available rides that overlap with your trip! </Text>
            <Text>
            Contact the driver on the trip's page to negotiate arrangements.
          </Text></div>
          }
        
        </ResultsText>

        <Results>

          { (matchArr)&&
            matchArr.map((ride) => (
            <Ride key={ride.id}>
            
            <Field>
              <Label>Leaving:</Label> <P>{ride.date}</P>
            </Field>
            <Field>
              <Label>Time:</Label> <P>{ride.time}</P>
            </Field>
            <Field>              
              <Label>From:</Label> <P><em>{ride.start_location}</em> </P><To>To</To> <P><em>{ride.end_location}</em></P>
            </Field>
            
              <Link to={`/ride/${ride.id}`}><Button>View Details</Button></Link>
            </Ride>
          ))}
        </Results>
         
    </div>) 
}

export default SearchResults;
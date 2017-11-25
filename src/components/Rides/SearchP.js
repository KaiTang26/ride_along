import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router'
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
  // const cities = props.params.cities;

  // Get array position of starting and end points
//   const startPos = cities.indexOf(start);
//   const endPos = cities.indexOf(end);
  
  // If travelling Eastward or Westward
//   let direction;
//   (startPos - endPos) > 0 ? direction = "west" : direction = "east";

  // console.log(direction);
  // console.log("START: ", startPos, "END ", end, endPos);

  // Find matches based on array positions
  const matchArr = [];

//   if (direction === "east") {
//     availableRides.forEach(function(ride) {
//       if (cities.indexOf(ride.start_location) <= startPos
//           && cities.indexOf(ride.end_location) >= endPos) {
//         matchArr.push(ride);
//       }
//     });
//   } else if (direction === "west") {
//     availableRides.forEach(function(ride) {
//       if (cities.indexOf(ride.start_location) >= startPos
//           && cities.indexOf(ride.end_location <= endPos)) {
//         matchArr.push(ride);
//         console.log("Result: start location ", ride.start_location, cities.indexOf(ride.start_location), "end location ", ride.end_location, cities.indexOf(ride.end_location))
//       }
//     });
//   } 

  availableRides.forEach((ele)=>{
    console.log("user diresction", direction)
    console.log("dirver diresction", ele.direction)
    if(direction===ele.direction){
      console.log("true")
      console.log("origin", testInside(origin, ele.polygon))
      if(testInside(origin, ele.polygon) && testInside(destination, ele.polygon)){
        matchArr.push(ele);
        
      }
    }
  })


  console.log("MATCH ARR: ", matchArr);
  
  const resultsNum = matchArr.length;

  return (

    <div> 
      
      
      Hello
      
      
    </div>
  )
  
  // if (start === "" || end === "") {
  //   return (
  //   <Text>Please select your starting and ending points.</Text> 
  // )} else {

  //   return (
  //     <div>
        
  //       <ResultsText>
  //         <Text>You searched for 
  //         <br/>start point ----- {props.params.start}
  //         <br/>endpoint ------ {props.params.end}
  //         </Text>

  //         { (resultsNum === 1) 
  //           ? <Text>There is 1 available ride that overlaps with your trip! </Text>
  //           : <Text>There are {resultsNum} available rides that overlap with your trip! </Text>
  //         }

  //         <Text>
  //           Contact the driver on the trip's page to negotiate arrangements.
  //         </Text>
        
  //       </ResultsText>

  //       <Results>

  //         {matchArr.map((ride) => (
  //           <Ride key={ride.id}>
  //             <Label>Leaving:</Label> {ride.date}
  //             <Label>Time</Label> {ride.time}
  //             <Label>From:</Label> {ride.start_location} To: {ride.end_location}
  //           </Ride>
  //         ))}
  //       </Results>
          
  //   </div>
  //   );
  // }
}

export default SearchResults;
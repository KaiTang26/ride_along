import React from 'react';
import api from '../utils/api';
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOdJrxTyFGID_cQFGUdskPi77ZQqKxy3c&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
        const DirectionsService = new window.google.maps.DirectionsService();
        DirectionsService.route({
            origin: new window.google.maps.LatLng(this.props.origin[0], this.props.origin[1]),
            destination: new window.google.maps.LatLng(this.props.destination[0], this.props.destination[1]),
            travelMode: window.google.maps.TravelMode.DRIVING,
        }, (result, status) => {

          let wayPoint = Math.round(result.routes[0].legs[0].steps.length/2)
          console.log(result.routes[0].legs[0])
            if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
                directions: result,
            });
            } else {
            // console.error(`error fetching directions ${result}`);
            }
        });
    },
    componentWillMount(){

    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(44.22914,-76.48079)}
  >
    <MarkerWithLabel
      position={{ lat: 43.942487, lng: -78.4312877 }}
      labelAnchor={new window.google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
    >
      <div>Free Coffee!</div>
      </MarkerWithLabel>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);



export default MapWithADirectionsRenderer;

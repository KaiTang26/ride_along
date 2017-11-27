import React from 'react';
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

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
    componentWillReceiveProps(nextProps) {
        const DirectionsService = new window.google.maps.DirectionsService();
        DirectionsService.route({
            origin: new window.google.maps.LatLng(nextProps.origin[0], nextProps.origin[1]),
            destination: new window.google.maps.LatLng(nextProps.destination[0], nextProps.destination[1]),
            travelMode: window.google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            console.log(result.routes[0].legs[0])
            this.props.handleDistanceDuration(result.routes[0].legs[0])
            if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
                directions: result,
            });
            } else {
            // console.error(`error fetching directions ${result}`);
            }
        });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(44.22914,-76.48079)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);



export default MapWithADirectionsRenderer;
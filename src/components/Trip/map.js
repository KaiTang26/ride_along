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
    componentWillReceiveProps() {
        const DirectionsService = new window.google.maps.DirectionsService();
        console.log("props: ", this.props)
        DirectionsService.route({
            origin: new window.google.maps.LatLng(this.props.origin[0], this.props.origin[1]),
            destination: new window.google.maps.LatLng(this.props.destination[0], this.props.destination[1]),
            travelMode: window.google.maps.TravelMode.DRIVING,
        }, (result, status) => {
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
    defaultCenter={new window.google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);



export default MapWithADirectionsRenderer;
import React from 'react';
import api from '../utils/api';
const { compose, withProps, lifecycle, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} = require("react-google-maps");
// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


let lat;
let lng;

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOdJrxTyFGID_cQFGUdskPi77ZQqKxy3c&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
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

          let wayPoint = Math.round(result.routes[0].legs[0].steps.length/2)-4
          console.log(result.routes[0].legs[0].steps[wayPoint].end_location.lat())
          console.log(result.routes[0].legs[0].steps[wayPoint].end_location.lng())
          lat= result.routes[0].legs[0].steps[wayPoint].end_location.lat()
          lng=result.routes[0].legs[0].steps[wayPoint].end_location.lng()
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
  {props.directions && 

    <Marker
      position={{ lat: lat, lng: lng }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              Free Coffee!
          </div>
        </div>
      </InfoBox>}
    </Marker>}

    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);



export default MapWithADirectionsRenderer;


  // <MarkerWithLabel
    //   position={{ lat: lat, lng: lng }}
    //   labelAnchor={new window.google.maps.Point(0, 0)}
    //   labelStyle={{backgroundColor: "yellow", fontSize: "10px", padding: "10px"}}
    // >
    //   <div>Free Coffee!</div>
    //   </MarkerWithLabel>}
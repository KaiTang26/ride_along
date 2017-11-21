import React, { Component } from 'react';
// import Map from './map.js';

export default class Location extends Component {
    constructor(props){
        super(props);
        this.state={
            origin:['',''],
            destination:['','']
      }
    }

    render(){
        return(
            <Map origin={this.state.origin} destination={this.state.destination}/>
        )
        
    }
    componentDidMount() {
        this.geocoder = new window.google.maps.Geocoder()
    }
}
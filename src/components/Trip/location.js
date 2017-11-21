import React, { Component } from 'react';
import api from '../utils/api';
import Map from './map.js';

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
        //     <div>
        //    <h1>{this.state.origin[0]}</h1>
        //    <h1>{this.state.origin[1]}</h1>
        //    <h1>{this.state.destination[0]}</h1>
        //    <h1>{this.state.destination[1]}</h1>
        //     {/* // <Map origin={this.state.origin} destination={this.state.destination}/> */}
        //     </div>

            <Map origin={this.state.origin} destination={this.state.destination}/>
        )
        
    }
    componentWillReceiveProps() {
        api.fetchGeocode(this.props.origin)
            .then( (response)=>{
                this.setState({
                    origin:[response.lat,response.lng]
                })
            }),
        api.fetchGeocode(this.props.destination)
            .then( (response)=>{
                this.setState({
                    destination:[response.lat,response.lng]
                })
            })
    }
}
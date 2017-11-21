import React, { Component } from 'react';
import api from '../utils/api';
import Map from './map.js';

export default class CalculateGeocode extends Component {
    constructor(props){
        super(props);
        this.state={
            start_location:"",
            end_location:"",
            origin:['',''],
            destination:['','']
            
        }
    }

    render(){
        return(
            <div>   
                    <label>
                        From:
                        <input type="text" name="start_location" onChange={this._handleInputChange}/>
                    </label>
                    <label>
                        To:
                        <input type="text" name="end_location" onChange={this._handleInputChange}/>
                    </label>
                    <input type="submit" value="Search" disabled={!( this.state.start_location && this.state.end_location)} onClick={this._submit.bind(this)}/>          
            </div>
        )
    }
    _handleInputChange=(event)=>{
        const target = event.target;
        const value = target.value; 
        const name = target.name;
        // console.log(target)
        this.setState({
            [name]:value
        })
    }
    _submit(event){
        event.preventDefault();

        api.fetchGeocode(this.state.start_location)
        .then( (response)=>{
            let origin = [response.lat,response.lng];
            api.fetchGeocode(this.state.end_location)
            .then( (response)=>{
                const address = {...this.state, origin: origin, destination: [response.lat,response.lng]}
                this.props.updateAddress(address);  
            });
        }); 
    }
}
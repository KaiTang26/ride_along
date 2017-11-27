import React, { Component } from 'react';
import api from '../utils/api';
import Map from './map.js';

export default class CalculateGeocode extends Component {
    constructor(props){
        super(props);
        this.state={
            start_location:"",
            end_location:""
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
    _makePolygon(start, end){
        let result =[];
        
          if ((start[0]>end[0]) && (start[1]>end[1])){
        
            result = [end, [end[0],start[1]], start, [start[0], end[1]]]
        
          }else if((end[0]>start[0]) && (end[1]>start[1])){
        
            result = [start, [start[0], end[1]], end, [end[0],start[1]]]
        
          }else if((start[0]>end[0]) && (end[1]>start[1])){
        
              result = [[end[0],start[1]], end, [start[0], end[1]], start ]
          }else {
              result = [[start[0], end[1]], start, [end[0],start[1]], end]
          }
          return result
    }

    _direction (polygon, start){
        let i;
        polygon.forEach((ele,r)=>{     
        if(ele[0]===start[0] && ele[1]===start[1]){
           return (i=r)    
          }
        }) 
        return i
    }

    _submit(event){
        event.preventDefault();

        api.fetchGeocode(this.state.start_location)
        .then( (response)=>{
            let origin = [response.lat,response.lng];
            api.fetchGeocode(this.state.end_location)
            .then( (response)=>{
                let destination= [response.lat,response.lng]
                let polygon = this._makePolygon(origin, destination)
                let direction = this._direction(polygon, origin)
                console.log(direction)
                console.log(this._direction(polygon, origin))
                const address = {...this.state, origin: origin, destination: destination, polygon:polygon, direction:direction}
                this.props.updateAddress(address);  
            });
        }); 
    }
}
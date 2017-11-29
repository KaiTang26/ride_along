import React, { Component } from 'react';
import api from '../utils/api';
import Map from './map.js';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import TextField from 'material-ui/TextField';
import { Icon } from 'semantic-ui-react';


const Icons = styled(Icon)`
margin-right: .55em !important;
vertical-align: top !important;
`

const Field = styled.div`
    > label {
    font-size: 75%;
    // letter-spacing: .5px;
    font-family: Lato;
    text-transform: uppercase;
    margin-bottom: .85em;
    color: ${gs.coral};
    display: inline-block;
    margin-right: .25em;
    font-weight: bold;
    width: 100%
    }
    // width: 45%;
    // padding-right: 1em;
    // float: left;
`;

const Button = styled.button`
    background: ${gs.coral};
    color: white;
    border: none;
    font-family: Lato;
    padding: .5em .75em;
    border-radius: 5px;
    position: relative;
    top: 1em;
    font-weight: bold;
    border-bottom: 2px solid #b91329;
    &:hover {
        cursor: pointer;
        background: #d11a2f;
        border-bottom: #b91329;
        border-top: 2px solid white;
    }
`;


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
                <Field>
                    <label>
                        From:
                        <TextField fullWidth={true} type="text" name="start_location" onChange={this._handleInputChange}/>
                    </label>
                    </Field>
                    <Field>
                    <label>
                        To:
                        <TextField type="text" fullWidth={true}name="end_location" onChange={this._handleInputChange}/>
                    </label>
                    </Field>
                    <Button type="submit" value="Search" disabled={!( this.state.start_location && this.state.end_location)} onClick={this._submit.bind(this)}>Search
      </Button>       
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

        localStorage.setItem("start", this.state.start_location);
        localStorage.setItem("end", this.state.end_location);


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
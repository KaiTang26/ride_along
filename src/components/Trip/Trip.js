// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';
import CalculateGeocode from './Calculategeo.js';
import api from '../utils/api';
import browserHistory from '../../history';
import Menu from '../Menu';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 65px;
`;

export default class Trip extends Component {

  constructor(props){
      super(props);
      this.state={
        passengers:"",
        time:"",
        date:"",
        start_location:"",
        end_location:"",
        origin:['',''],
        destination:['',''],
        price:'',
        description:'',
        polygon:[],
        direction:'',
        distance:'0 km',
        duration:'0 hr' 
    }
  }
  render() {
    // const city = ["Select City", "Windsor, ON", "Chatham-Kent, ON", "London, ON", "Kitchener, ON", "Waterloo, ON", "Cambridge, ON", "Guelph, ON", "Hamilton, ON", "St.Catharines, ON", "Burlington, ON", "Mississauga, ON", "Toronto, ON", "Kingston, ON", "Ottawa, ON", "Gatineau, QC", "Montreal, QC", "Trois-Riveres, QC", "Quebec, QC"];
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>

    <Menu />
      <Container>
         <form onSubmit={this._submitForm.bind(this)}>
            <CalculateGeocode updateAddress={this._handleLocationSearch}/>
            <label>
                Total Distance: {this.state.distance}
            </label>
            <label>
                Total Duration: {this.state.duration}
            </label>
            <label>
            Date:
            <input type="date"  name='date' value={this.state.date} onChange={this._handleInputChange}/>
            </label>
            <label>
            Time:
            <input type="time"  name="time" value={this.state.time} onChange={this._handleInputChange}/>
            </label>
            <label>
            Number of Passengers:
            <input name="passengers"
                   type="number"
                   min="1"
                   max="12"
                   step="1"
                   value={this.state.numberOfPassenger}
                   onChange={this._handleInputChange} />
            </label>
            <label>
            Price:
            <input name="price"
                   type="number"
                   value={this.state.numberOfPassenger}
                   onChange={this._handleInputChange} />
            </label>
            <label>
            About:
            <input type="text" name="description" onChange={this._handleInputChange}/>
            </label>
            <button type="submit" disabled={!(this.state.passengers && this.state.time && this.state.date && this.state.start_location && this.state.end_location)}>
                Submit
            </button>
        </form> 
        <Map origin={this.state.origin} destination={this.state.destination} handleDistanceDuration={this._handleDistanceDuration}/>
        </Container>
      </div>
    );
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
  
    _handleLocationSearch=(address)=>{

        console.log(address)

        this.setState({
            start_location:address.start_location,
            end_location:address.end_location,
            origin:address.origin,
            destination:address.destination,
            polygon: address.polygon,
            direction: address.direction
        })      
    }

    _submitForm(event){
        event.preventDefault();
        const id = Number(localStorage.getItem("user_id"))
        const tripInfor = this.state;
        api.postTrip(id,tripInfor)
        .then((response)=>{
            if(response.status===200){      
            browserHistory.push("/ride/"+response.data.id)             
            }
        })
    }

    _handleDistanceDuration=(event)=>{
        this.setState({
            distance:event.distance.text,
            duration:event.duration.text
        })
    }
}

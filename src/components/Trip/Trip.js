// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';
import CalculateGeocode from './Calculategeo.js';
import api from '../utils/api';

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
        description:'' 
    }
  }
  render() {
    // const city = ["Select City", "Windsor, ON", "Chatham-Kent, ON", "London, ON", "Kitchener, ON", "Waterloo, ON", "Cambridge, ON", "Guelph, ON", "Hamilton, ON", "St.Catharines, ON", "Burlington, ON", "Mississauga, ON", "Toronto, ON", "Kingston, ON", "Ottawa, ON", "Gatineau, QC", "Montreal, QC", "Trois-Riveres, QC", "Quebec, QC"];
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>
         <form onSubmit={this._submitForm.bind(this)}>
            <CalculateGeocode updateAddress={this._handleLocationSearch}/>
            <label>
            Date:
            <input type="date"  name='date' value={this.state.date} onChange={this._handleInputChange}/>
            </label>
            <label>
            Time:
            <input type="time"  name="time" value={this.state.time} onChange={this._handleInputChange}/>
            </label>
            <label>
            Number of Passenger:
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
        <Map origin={this.state.origin} destination={this.state.destination}/>
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

        this.setState({
            start_location:address.start_location,
            end_location:address.end_location,
            origin:address.origin,
            destination:address.destination 
        })      
    }

    _submitForm(event){
        event.preventDefault();
        const tripInfor = this.state;
        api.postTrip(1,tripInfor)
        .then()
    }
}

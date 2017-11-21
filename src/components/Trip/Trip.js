// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';
// import Location from './location.js';
import api from '../utils/api';

export default class Trip extends Component {

  constructor(props){
      super(props);
      this.state={
        passengers:"",
        time:"",
        date:"",
        start_location:"",
        end_location:"" 
    }
  }
  render() {
    const city = ["Select City", "Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo", "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington", "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal", "Trois-Riveres", "Quebec"];
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>
         <form onSubmit={this._submitForm.bind(this)}>
            <label>
            Date:
            <input type="date"  name='date' value={this.state.date} onChange={this._handleInputChange}/>
            </label>
            <label>
            Time:
            <input type="time"  name="time" value={this.state.time} onChange={this._handleInputChange}/>
            </label>

            <label>
            From:
            <select placeholder="Select City" name="start_location" onChange={this._handleInputChange}>
            { city.map((ele, i)=>{

                return <option value={ele} key={i}>{ele}</option>

            })}
            </select>
            </label>

            <label>
            To:
            <select placeholder="Select City" name="end_location" onChange={this._handleInputChange}>
            { city.map((ele, i)=>{
                return <option value={ele} key={i}>{ele}</option>
            })}
            </select>
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
            <button type="submit" disabled={!(this.state.passengers && this.state.time && this.state.date && this.state.start_location && this.state.end_location)}>
                Submit
            </button>

            {/* <button type="submit">
                Reset
            </button> */}
        </form>      
        <Map origin={this.state.origin} destination={this.state.destination}/>
      </div>
    );
  }

    _handleInputChange=(event)=>{
        const target = event.target;
        const value = target.value; 
        const name = target.name;
        console.log(target)
        this.setState({
            [name]:value
        })
    }

    _submitForm(event){
        event.preventDefault();
        const tripInfor = this.state;
        api.postTrip(1,tripInfor)
        .then()
    }
}

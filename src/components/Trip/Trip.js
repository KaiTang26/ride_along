// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';
// import Location from './location.js';
import api from '../utils/api';

class CalculateGrocode extends Component{

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

        // api.fetchGeocode(this.state.end_location)
        // .then( (response)=>{
        //     this.setState({
        //         origin:[response.lat,response.lng]
        //     })
        //     api.fetchGeocode(this.state.start_location)
        //     .then( (response)=>{
        //         this.setState({
        //             destination:[response.lat,response.lng]
        //         })
        //         const address = this.state;
        //         this.props.updateAddress(address);  
        //     });
        // }); 
    }
}






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
        destination:['',''] 
    }
  }
  render() {
    // const city = ["Select City", "Windsor, ON", "Chatham-Kent, ON", "London, ON", "Kitchener, ON", "Waterloo, ON", "Cambridge, ON", "Guelph, ON", "Hamilton, ON", "St.Catharines, ON", "Burlington, ON", "Mississauga, ON", "Toronto, ON", "Kingston, ON", "Ottawa, ON", "Gatineau, QC", "Montreal, QC", "Trois-Riveres, QC", "Quebec, QC"];
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>
         <form onSubmit={this._submitForm.bind(this)}>
            <CalculateGrocode updateAddress={this._handleLocationSearch}/>
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

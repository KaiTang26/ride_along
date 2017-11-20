// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';

// import './style.css';

class CreateTrip extends Component {

    constructor(props){
        super(props);
        this.state={
            numberOfPassenger:0,
            time:"",
            date:""
            
        }
    }
    render(){
        const city = ["Select City", "Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo", "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington", "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal", "Trois-Riveres", "Quebec"];
        return(
            <form >
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
            <select placeholder="Select City">
            { city.map((ele, i)=>{

                return <option value={ele} key={i}>{ele}</option>

            })}
            </select>
            </label>

            <label>
            To:
            <select placeholder="Select City">
            { city.map((ele, i)=>{

                return <option value={ele} key={i}>{ele}</option>

            })}
            </select>
            </label>

            <label>
            Number of Passenger:
            <input name="numberOfPassenger"
                   type="number"
                   min="0"
                   max="12"
                   step="1"
                   value={this.state.numberOfPassenger}
                   onChange={this._handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )

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
}


export default class Trip extends Component {

  constructor(props){
      super(props);
      this.state = {
      }

  }
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>
        <CreateTrip />       
        <Map />
      </div>
    );
  }
}

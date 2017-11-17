// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';

// import './style.css';

export default class Trip extends Component {

  constructor(props){
      super(props);
      this.state = {
          numberOfPassenger: 0,
          city: ["Select City", "Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo", "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington", "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal", "Trois-Riveres", "Quebec"]
      }

  }
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>
        <form >
            <label>
            Date:
            <input type="text"  />
            </label>
            <label>
            Time:
            <input type="text"  />
            </label>

            <label>
            From:
            <select placeholder="Select City">
            { this.state.city.map((ele, i)=>{

                return <option value={ele} key={i}>{ele}</option>

            })}
            </select>
            </label>

            <label>
            To:
            <select placeholder="Select City">
            { this.state.city.map((ele, i)=>{

                return <option value={ele} key={i}>{ele}</option>

            })}
            </select>
            </label>

            <label>
            Number of Passenger:
            <input name="numberOfPassenger"
                   type="number"
                   value={this.state.numberOfPassenger}
                   onChange={this._handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAOdJrxTyFGID_cQFGUdskPi77ZQqKxy3c"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }

  _handleInputChange=(event)=>{
      const target = event.target;
      const value = target.value; 
      const name = target.name;
      this.setState({
          [name]:value
      })
  }

  
}

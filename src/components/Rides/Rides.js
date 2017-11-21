import React, { Component } from 'react';
import classnames from 'classnames';
import Posts from './Posts'

export default class Rides extends Component {

  constructor(props){
    super(props);
    this.state = {
        cities: ["Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo",
        "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington",
        "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal",
         "Trois-Riveres", "Quebec"],
        rides: [],
        start: "Windsor",
        end: "Windsor",
    }


  }

  componentWillMount(){
      // Ajax requist
      fetch('/api/trips',{
        method: 'get'
      })
      .then(response => response.json())
      .then(rides => {
        this.setState({rides})
      })
  }

  render () {
    const { className, ...props } = this.props;
    return (
// Wrap this in a component to make cleaner

    <div>
      <h1>Find a Ride</h1>
      <form onSubmit={this._handleSubmit}>
        <label>
        Pickup Location:
          <select name="start" value={this.state.start} onChange={this._handleInputChange}>
          { this.state.cities.map((ele, i)=>{

              return <option value={ele} key={i}>{ele}</option>

          })}
          </select>
        </label>

        <label>
        Drop Off:
          <select name="end" value={this.state.end} onChange={this._handleInputChange}>
          { this.state.cities.map((ele, i)=>{

              return <option value={ele} key={i}>{ele}</option>

          })}
          </select>
        </label>
        <input type="submit" value="Search Trips" />
      </form>
      <Posts rides = {this.state.rides} />
    </div>
    )
  }


  _handleInputChange=(event)=> {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(value);
      this.setState({
        [name]: value,
      })
  }

// Need to figure out why preventDefualt not working
// Or maybe I do a fetch with the params and return a list of trips
  _handleSubmit=(event) => {
    event.preventDefault();
    // alert("start point "+ this.state.start + " endpoint: "+ this.state.end)
    // fetch('/:id', {
    //   method: 'get',
    //   body: {
    //
    //   }
    // })
    // var state = this.state
    // for (var i = 0; i < state.postedTrips.length; i++) {
    //     if (state.postedTrips[i].start === state.start && state.postedTrips[i].end === state.end) {
    //       alert("hey");
    //     }
    // }
  }
}

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

        postedTrips: [{date: "01-12-2018", time: "12:00pm", start: "Ottawa", end: "Toronto"},
                    {date: "01-12-2018", time: "12:00pm", start: "Montreal", end: "Toronto"}],

        searchTrip: {start: "", end: ""},
        test: "something"
    }
  }

  render () {
    const { className, ...props } = this.props;
    return (
// Wrap this in a component to make cleaner

    <div {...props}>
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

      <Posts />
    {this.state.postedTrips[0].start}

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
    alert("start point "+ this.state.start + " endpoint: "+ this.state.end)
    var state = this.state
    for (var i = 0; i < state.postedTrips.length; i++) {
        if (state.postedTrips[i].start === state.start && state.postedTrips[i].end === state.end) {
          alert("hey")
        }
    }
    this.event.preventDefualt();
    alert("ok");
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'

export default class Reviews extends Component {

  constructor(props){
    super(props);
    this.state = {
      cities: ["", "Windsor", "Chatham-Kent", "London", "Kitchener", "Waterloo",
      "Cambridge", "Guelph", "Hamilton", "St.Catharines", "Burlington",
      "Mississauga", "Toronto", "Kingston", "Ottawa", "Gatineau", "Montreal",
        "Trois-Riveres", "Quebec"],
      rides: [],
      start: "",
      end: "",
      detail: 'all',
      showAll: true
    }
  }

  componentWillMount(){
    // api.getRides()
    // .then(result => {
    //   let rides = result.data
    //   this.setState({rides})
    //   console.log(rides);
    // });
  }

  render () {
    const { className, ...props } = this.props;

    return (
    <div>
      {this.state.showAll
        ? <h1>Reviews</h1>
        : null}
    </div>
    );
  }
}

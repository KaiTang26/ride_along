import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'

export default class Reviews extends Component {

  render () {
    return (
    <div>
      {this.props.reviews
        ?
        <div>
          {console.log(this.props.reviews)}
          {console.log(this.props.reviews[0].trip.reviews)}
          { this.props.reviews[0].trip.reviews.map((ele, i)=>{
            return <div key={i}>{ele.review_text}</div>
          })}
        </div>
        : null}
    </div>
    );
  }
}

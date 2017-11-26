import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'

const ReviewUI = (props) => {
  return(

    <div>
      <h1>Sebastian</h1>
      {props.data.review_text}
      <h2>{props.data.rating}</h2>
    </div>
  )
}

export default class Reviews extends Component {


  render () {
    return (
    <div>
      {this.props.reviews?
          <div>
            {console.log(this.props.reviews)}
            {console.log(this.props.reviews[0].trip.reviews)}
            {this.props.reviews.map((key)=>
              key.trip.reviews.map((ele, i)=>{
                return <ReviewUI key={i} data={ele}/>
              })
            )}
          </div>
        :
          null
        }
    </div>
    );
  }
}

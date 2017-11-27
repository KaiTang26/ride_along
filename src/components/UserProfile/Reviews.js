import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import { Route, Redirect } from 'react-router'

const ReviewUI = (props) => {

  return(

    <div>
      <h1>{props.users[props.data.user_id-1].first_name}</h1>
      {props.data.review_text}
      <h2>{props.data.rating}</h2>
    </div>
  )
}

export default class Reviews extends Component {

// Need to rethink this I'll probably have to do this through a query

  componentDidMount() {

    (api.getUsers())
    .then(results =>
      this.setState({
        users:results
      }),
    );
  }

  render () {
    return (
    <div>
      {this.props.reviews?
          <div>
            {console.log(this.props.reviews)}
            {console.log(this.props.reviews[0].trip.reviews)}
            {this.props.reviews.map((key)=>
              key.trip.reviews.map((ele, i)=>{
                return <ReviewUI users={this.state.users.data} key={i} data={ele}/>
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

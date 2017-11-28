import React, { Component } from 'react';
import styled from 'styled-components';
import api from '../utils/api';
import { Route, Redirect } from 'react-router';
import gs from '../GlobalStyles.js';

import { Rating } from 'semantic-ui-react';


const User = styled.h3`
  font-style: italic;
  color: ${gs.blue};
  float: left;
  font-weight: bold;
  font-family: Lato
`;

const Stars = styled.div`
float: left;
position: relative;
bottom: 1px;
left: .35em;
`;

const Header = styled.div`
  overflow: hidden;
`;

const Img = styled.img`
float: left;
width: 100px;
margin-right: .5em;
`;
const Container = styled.div`
margin: 1.65em 0;
overflow: hidden;
`;

const Text = styled.p`
font-style: italic;
margin: .25em 0
`;
const ReviewUI = (props) => {

  return(

    <Container>
      <Img src={`/images/${props.users[props.data.user_id-1].picture}`}/>
      <Header>
      
      <User>{props.users[props.data.user_id-1].first_name}</User>
      <Stars>
      
  <Rating icon='star' defaultRating={`${props.data.rating}`} disabled size="mini" maxRating={5} />
      </Stars>
      </Header>

      <Text>
      {props.data.review_text}
      </Text>
    </Container>
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
            {console.log(this.props)}
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

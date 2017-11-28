import React, {Component} from 'react';
import api from '../utils/api';
import Map from './map.js';
import ChatContainer from '../Chat/ChatContainer';
import AddCondition from '../Agreement/AddCondition';
import DisplayCondition from '../Agreement/DisplayCondition';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import Menu from '../Menu';
import { join } from 'path';

const Container = styled.div`
  padding-top: 65px;
`;
const Left = styled.div`
  float: left;
  width: 40%;
  z-index: 1;
  position: relative;
`;
const Right = styled.div`
  float: right;
  width: 60%;
  position: fixed;
  right: 0;

`;



const RideMap = (props) => {
  // console.log(props.id.origin)
  return(
    <Map origin={props.id.origin} destination={props.id.destination} start_location={props.id.start_location} end_location={props.id.end_location}/>
  )
}


class Jointrip extends Component{

  constructor(props){
    super(props);
    this.state={
      open: false
    }
  }

  render(){
    const currentUser = Number(localStorage.getItem("user_id"))
    let showJoin = false;
    if(this.props.user){
      const numberOfUser = this.props.user.length-1
      const testOfcurrentUser = this.props.user.indexOf(currentUser)
      if(currentUser && (testOfcurrentUser === -1) && (numberOfUser<this.props.id.passengers)){
        showJoin = true;
      }
    }

    return(
      <div>
        { this.props.detial && this.props.detial.map((ele, i)=>(
          <div className="joinUser" key={i}>
          <h1>{ele.user.first_name} joined this trip from {ele.start} to {ele.end} </h1>
          </div>))}

        { showJoin && 
          <form onSubmit={this._submitForm.bind(this)}>
            <button type="submit" >
              Join Trip
            </button>
          </form>
        }        
      </div>
    )
  }

  _submitForm(event){
    event.preventDefault();
    const id = Number(localStorage.getItem("user_id"))
    
    const joinTrip ={
      user_id:id,
      trip_id: this.props.id.id,
      start: localStorage.getItem("start"),
      end: localStorage.getItem("end")
    };
    console.log(joinTrip)
    
    api.postJoin(id,joinTrip)
    .then((response)=>{
        if(response.status===200){
          console.log(response.data)     
        }
    })
  }

}


const RideDetailUI = (props) => {
  // console.log(props.id.origin)
  // const currentUser = localStorage.getItem("user_id");
  const currentUser = Number(localStorage.getItem("user_id"));
  let isDriver=false;
  
  {currentUser === props.id.driver
    ? isDriver = true
    : isDriver = false}
    console.log(props.id.id)
  return(
    <div>

    <h1>Ride from {props.id.start_location} to {props.id.end_location} </h1>
    <h2>Total distance: {props.id.distance}</h2>
    <h2>Total duration: {props.id.duration}</h2>
    <h2>Leaving {props.id.date} at {props.id.time}</h2>
    <br></br>
    <h2>Name: {props.id.driver}</h2>
    <div>Image placeholder</div>
    <br></br>
    <h3>{props.id.driver} is looking to have {props.id.passengers} passengers join the ride.</h3>
    <br></br>
    <p>Some text in paragraph form</p>
    <br></br>
      <DisplayCondition user={currentUser} statements={props.id.agreements} isDriver={isDriver}/>
      {isDriver
        ? <AddCondition tripId={props.id.id}/>
        : null}
    </div>
  )
}

class Details extends Component {
  constructor(props) {
    super(props);
    // this.state = {ride: {}};
    // console.log(this.state)
    api.getRide(this.props.match.params.id)
    .then(result => {
      let ride = result.data
      this.setState({ride})
      api.fetchJoin(ride.id)
      .then(result => {
        let joinUsers = result.data
        console.log(typeof joinUsers )
        this.setState({
          user: joinUsers.userList,
          detial: joinUsers.detial
          })
        console.log(this.state.detial)
        
      })
    })

  }
  // Can use if result.status to do condition rendering
  // componentWillMount() {

  // }
  render() {
    return (
      <div>
        <Menu/>
        <Container>
          <Left>
          {this.state?
              <div>
                <RideDetailUI id={this.state.ride} />
                <ChatContainer id={this.state.ride} />
                <Jointrip id={this.state.ride} detial={this.state.detial} user={this.state.user}/>
              </div>
              :"" }
          </Left>

          <Right>


          {/* {this.state? <RideDetailUI id={this.state.ride} />
            : <h1>Loading </h1>}
            {this.state? <ChatContainer id={this.state.ride} />
              : <h1>Loading </h1>} */}
          {this.state? 
          <RideMap id={this.state.ride} />
            : ""}            

          </Right>
        </Container>
      </div>
  )}
}
export default Details;

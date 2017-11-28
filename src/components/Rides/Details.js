import React, {Component} from 'react';
import api from '../utils/api';
import Map from './map.js';
import ChatContainer from '../Chat/ChatContainer';
import AddCondition from '../Agreement/AddCondition';
import DisplayCondition from '../Agreement/DisplayCondition';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import Menu from '../Menu';
import { Icon } from 'semantic-ui-react';
import { join } from 'path';
import Message from './Message.js';


const Container = styled.div`
  padding-top: 65px;
`;
const Left = styled.div`
  float: left;
  width: 40%;
  padding: 0 1.5em;
  z-index: 1;
  position: relative;
`;
const Right = styled.div`
  float: right;
  width: 60%;
  position: fixed;
  right: 0;

`;

const H1 = styled.h1`
font-weight: 900;
font-size: 120%;
margin: 2em 0 1.5em !important;
`;

const Label = styled.p`
font-size: 75%;
// letter-spacing: .5px;
font-family: Lato;
text-transform: uppercase;
margin-bottom: .85em;
color: ${gs.golden};
display: inline-block;
margin-right: .25em;
font-weight: bold;
`;
const P = styled.p`
display: inline-block;
`;

const Field = styled.div`
margin: .5em 0;
`;


const RideMap = (props) => {
    return(
          <Map origin={props.id.origin} 
                destination={props.id.destination} 
                start_location={props.id.start_location} 
                end_location={props.id.end_location}/> 
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
    // console.log(this.props.id.driver)

    const currentUser = Number(localStorage.getItem("user_id"))
    let showJoin = false;
    if(this.props.user){
      const numberOfUser = this.props.user.length
      const testOfcurrentUser = this.props.user.indexOf(currentUser)
      const location = localStorage.getItem("end") && localStorage.getItem("start")
      const notDriver = !(this.props.id.driver === currentUser)
      if(currentUser && (testOfcurrentUser === -1) && (numberOfUser<this.props.id.passengers)&&location&&notDriver){
        showJoin = true;
      }
    }
    const Join = styled.div`
      font-style: italic;
      // color: ${gs.golden};
      margin-left: 140px;
      margin-top: 3em;
      font-size: 80%;
      > div h1 {
      margin: 1em 0 0;}
    `;
    return(
      <Join>
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

        {this.state.open && <Message id={this.props.id.id}/>}       
      </Join>
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
          
          this.setState({
            open:true
          })
        }
    })
  }

}

const Icons = styled(Icon)`
vertical-align: top !important;
margin-right: .55em !important;
`
const Driver = styled.h2`
// display: inline-block;
font-weight: bold;
font-size: 120%;
font-style: italic;
`;

const IMG = styled.img`
  width: 100px;
  margin-top: .65em;
`;

const RideContainer = styled.div`
  overflow: hidden;
`;

const Leftside = styled.div`
  float: left;
  width: 140px;
`;
const Rightside = styled.div`
  float: left;
`;
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
    <H1>{props.id.start_location} to {props.id.end_location} </H1>

    <RideContainer>
    <Leftside>
    <IMG src={`/images/Bill.jpg`}/>
    <Field>
     
      <Label>Driver:</Label> 
      <Driver>{props.driver.first_name}</Driver>
      
    </Field>
    </Leftside>
    <Rightside>
    <Field>
      <Label>
      <Icons fitted name='calendar' size='large'/>
        Leaving:</Label> <P>{props.id.date} </P>
    </Field>
    
    <Field>
      <Label>
      <Icons fitted name='time' size='large'/>
    Time:</Label><P>{props.id.time}</P>
    </Field>
      

    <Field>
      <Label>
      <Icons fitted name='road' size='large'/>
        Total distance:</Label> <P>{props.id.distance}</P>
    </Field>
    
    <Field>
      <Label>
      <Icons fitted name='hourglass end' size='large'/>
      Total duration:</Label> <P>{props.id.duration}</P>
    </Field>

    <Field>
      <Label>
      <Icons fitted name='users' size='large'/>
     Seats:</Label> <P>Looking for {props.id.passengers} passengers to join</P>
     
    </Field>

    <Field>
      <DisplayCondition user={currentUser} statements={props.id.agreements} isDriver={isDriver}/>
      {isDriver
        ? <AddCondition tripId={props.id.id}/>
        : null}
      </Field>
      </Rightside>
      </RideContainer>
    </div>
  )
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "",
      ride:{driver:0}
    };

    api.getRide(this.props.match.params.id)
    .then(result => {
      let ride = result.data
      // console.log(result.data)
      this.setState({ride})

      api.userInfo(ride.driver)
      .then(results => {
        this.setState({
          userInfo:results.data
        })
      })
      api.fetchJoin(ride.id)
      .then(result => {
        let joinUsers = result.data
        // console.log(typeof joinUsers )
        this.setState({
          user: joinUsers.userList,
          detial: joinUsers.detial
          })
        console.log("state",this.state)
        
      })
    })
  }


  // }
  render() {
    return (
      <div>
        <Menu/>
        <Container>
          <Left>
          {this.state.ride.agreements?
              <div>
                <RideDetailUI id={this.state.ride} driver={this.state.userInfo} />
                
                <Jointrip id={this.state.ride} detial={this.state.detial} user={this.state.user}/>

                <ChatContainer id={this.state.ride} />
                
              </div>
              :"" }
          </Left>

          <Right>


          {/* {this.state? <RideDetailUI id={this.state.ride} />
            : <h1>Loading </h1>}
            {this.state? <ChatContainer id={this.state.ride} />
              : <h1>Loading </h1>} */}
          {this.state.ride.origin &&
          <RideMap id={this.state.ride} />
            }            

          </Right>
        </Container>
      </div>
  )}
}
export default Details;

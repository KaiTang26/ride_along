// src/components/Trip/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Map from './map.js';
import CalculateGeocode from './Calculategeo.js';
import api from '../utils/api';
import browserHistory from '../../history';
import Menu from '../Menu';
import styled from 'styled-components';
import gs from '../GlobalStyles.js';
import TextField from 'material-ui/TextField';

const Container = styled.div`
    margin-top: 60px;
    overflow: hidden;
`;
const Left = styled.div`
  float: left;
  width: 40%;
  padding: 0 1.85em 0 1.5em ;
  z-index: 1;
  position: relative;
`;
const Right = styled.div`
  float: right;
  width: 60%;
  position: fixed;
  right: 0;

`;
const Form = styled.div`
    margin: 3em 0;
`;
const Info = styled.div`
margin: 5em 0;
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

const Field = styled.div`
margin: 1.75em 0;
`;

const Input = styled.input`
    padding: .25em;
    margin-left: .25em;
    font-size: 140%;
    font-weight: bold;
    font-family: Lato;
    border: none;
    border-bottom: 1px solid #ddd;
    // border-bottom: 1px solid ${gs.golden};
`;
const About = styled.input`
padding: .25em;
margin-left: .25em;
font-size: 150%;
font-family: Lato;
border: none;
border-bottom: 1px solid #ddd;
// border-bottom: 1px solid ${gs.golden};
`;
const Button = styled.button`
background: #eba224;
color: white;
border: none;
font-family: Lato;
// margin: 0em 0 2em 1.75em;
padding: .5em .75em;
border-radius: 5px;
font-weight: bold;
border-bottom: 2px solid #c98613;
&:hover {
  cursor: pointer;
  background: #db9214;
  border-bottom: #c98613;
  border-top: 1px solid white;
}
`;

export default class Trip extends Component {

  constructor(props){
      super(props);
      this.state={
        passengers:"",
        time:"",
        date:"",
        start_location:"",
        end_location:"",
        origin:['',''],
        destination:['',''],
        price:'',
        description:'',
        polygon:[],
        direction:'',
        distance:'0 km',
        duration:'0 hr' 
    }
  }
  render() {
    // const city = ["Select City", "Windsor, ON", "Chatham-Kent, ON", "London, ON", "Kitchener, ON", "Waterloo, ON", "Cambridge, ON", "Guelph, ON", "Hamilton, ON", "St.Catharines, ON", "Burlington, ON", "Mississauga, ON", "Toronto, ON", "Kingston, ON", "Ottawa, ON", "Gatineau, QC", "Montreal, QC", "Trois-Riveres, QC", "Quebec, QC"];
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Trip', className)} {...props}>

    <Menu />
      <Container>
          <Left>
             
         <Form onSubmit={this._submitForm.bind(this)}>
            <CalculateGeocode updateAddress={this._handleLocationSearch}/>

            <Info>

                <Field>
            <Label>
                Total Distance:</Label> {this.state.distance}
            
            </Field>
            <Field>
            <Label>
                Total Duration:</Label> {this.state.duration}
            </Field>
            <Field>
            
            <Label>
            Date:
            <Input type="date"  name='date' value={this.state.date} onChange={this._handleInputChange}/>
            </Label></Field>
            <Field>
            
            <Label>
            Time:
            <Input type="time"  name="time" value={this.state.time} onChange={this._handleInputChange}/>
            </Label></Field>
            <Field>
            
            <Label>
            Number of Passengers:
            <Input name="passengers"
                   type="number"
                   min="1"
                   max="12"
                   step="1"
                   value={this.state.numberOfPassenger}
                   onChange={this._handleInputChange} />
            </Label></Field>
            <Field>
            
            <Label>
            Price:
            <Input name="price"
                   type="number"
                   value={this.state.numberOfPassenger}
                   onChange={this._handleInputChange} />
            </Label></Field>
            <Field>
            
            <Label>
            About:
            <About type="text" name="description" onChange={this._handleInputChange}/>
            </Label></Field>
            <Field>
            
            <Button type="submit" disabled={!(this.state.passengers && this.state.time && this.state.date && this.state.start_location && this.state.end_location)}>
                Submit
            </Button>
            </Field>
            
            
            </Info>
        </Form> 
        </Left>

        <Right>
        <Map origin={this.state.origin} destination={this.state.destination} handleDistanceDuration={this._handleDistanceDuration}/>

        </Right>
        </Container>
      </div>
    );
  }

    _handleInputChange=(event)=>{
        const target = event.target;
        const value = target.value; 
        const name = target.name;
        // console.log(target)
        this.setState({
            [name]:value
        })
    }
  
    _handleLocationSearch=(address)=>{

        console.log(address)

        this.setState({
            start_location:address.start_location,
            end_location:address.end_location,
            origin:address.origin,
            destination:address.destination,
            polygon: address.polygon,
            direction: address.direction
        })      
    }

    _submitForm(event){
        event.preventDefault();
        const id = Number(localStorage.getItem("user_id"))
        const tripInfor = this.state;
        api.postTrip(id,tripInfor)
        .then((response)=>{
            if(response.status===200){      
            browserHistory.push("/ride/"+response.data.id)             
            }
        })
    }

    _handleDistanceDuration=(event)=>{
        this.setState({
            distance:event.distance.text,
            duration:event.duration.text
        })
    }
}

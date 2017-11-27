import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles';
import EditCondition from './EditCondition';
import api from '../utils/api';
import RadioToggle from './RadioToggle';
import { Radio } from 'semantic-ui-react';
import CheckAgree from './Toggled';
import { Icon } from 'semantic-ui-react';

import EditEx from './EditEx';
import Delete from './Delete';


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
 const Icons = styled(Icon)`
  color: ${gs.golden};
  position: relative;
  bottom: 1px;
 `

export default class DisplayCondition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statement: ""
    }
  }

  // handleEdit = e => {
  //   // api.editCondition()
  // }
 
  // handleDelete = (trip, id) => {
  //   api.deleteCondition(trip, id);
  //   window.location.reload();
  // }

  

  render() {


    return (
      <div>
        <Label>
          Conditions:
        </Label>
        {this.props.statements.map((condition) => (
          <div>
              <p><Icons fitted name='chevron right' size='tiny'/>
              <Icons fitted name='chevron right' size='tiny
              '/>  {condition.statement}</p> 
            {this.props.isDriver
              ? <div>
                <EditCondition 
                  tripId={condition.trip_id} 
                  id={condition.id} 
                  statement={condition.statement}/>


                {/* <Delete 
                  onClick={ e => {
                    this.handleDelete(condition.trip_id, condition.id)
                  }
                }
                >Delete</Delete> */}
                <Delete 
                  tripId={condition.trip_id} 
                  id={condition.id} 
                />

              </div>
            :
            // <CheckAgree user={this.props.user} tripId={condition.trip_id} condition={condition.id} 
            // id={condition.id}/>

            <EditEx
            user={this.props.user} tripId={condition.trip_id} condition={condition.id} 
            id={condition.id}         
            
            // find={api.findPassengerAgreement(condition.trip_id, condition.id, this.props.user)}    
          />
            // <RadioToggle toggle user={this.props.user} tripId={condition.trip_id} condition={condition.id} 
            // id={condition.id} /> 
            }

        </div>

      ))}
    </div>  
    );
  }
}

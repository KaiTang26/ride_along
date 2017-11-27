import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles';
import EditCondition from './EditCondition';
import api from '../utils/api';
import RadioToggle from './RadioToggle';
import { Radio } from 'semantic-ui-react';
import CheckAgree from './Toggled'

import EditEx from './EditEx';
import Delete from './Delete';



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
        {this.props.statements.map((condition) => (
          <div>
            <p>{condition.statement}</p> 
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

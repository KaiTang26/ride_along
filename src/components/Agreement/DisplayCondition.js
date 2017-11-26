import React, { Component } from 'react';
import styled from 'styled-components';
import gs from '../GlobalStyles';
import EditCondition from './EditCondition';
import api from '../utils/api';
import RadioToggle from './RadioToggle';
import { Radio } from 'semantic-ui-react';
import CheckAgree from './Toggled'
import { Popconfirm, message } from 'antd';

import Delete from './Delete'



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

                {/* <Popconfirm title="Are you sure you want to delete this condition?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                    <a href="#">Delete</a>
                  </Popconfirm> */}

              </div>
            :<CheckAgree user={this.props.user} tripId={condition.trip_id} condition={condition.id} 
            id={condition.id}/>
            // <RadioToggle toggle user={this.props.user} tripId={condition.trip_id} condition={condition.id} 
            // id={condition.id} /> 
            }


        </div>
      ))}
    </div>  
    );
  }
}
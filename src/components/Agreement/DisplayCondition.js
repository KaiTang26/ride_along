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
  
  vertical-align: middle;
 `
 const Float = styled.div`
  // float: left;
  display: inline-block;
  > p {
    margin-right: 2em;
  }
 `;

 const Container = styled.div`
  margin: 0 0 .5em 1.5em;
  overflow: hidden;
 `;
 const Iconb = styled(Icon)`
//  vertical-align: top !important;
 margin-right: .35em !important;
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
        <Iconb fitted name='check square' size='large'/>        
          Conditions:
        </Label>
        {this.props.statements.map((condition) => (
          <Container>
            <Float>
              <p><Icons fitted name='chevron right' size='tiny'/>
              <Icons fitted name='chevron right' size='tiny'/>  {condition.statement}</p> 
            </Float>


            {this.props.isDriver
              ? <Float>
                <Float>
                  <EditCondition
                  tripId={condition.trip_id}
                  id={condition.id}
                  statement={condition.statement}/>
                </Float>

                {/* <Delete
                  onClick={ e => {
                    this.handleDelete(condition.trip_id, condition.id)
                  }
                }
                >Delete</Delete> */}

                <Float>
                  <Delete
                    tripId={condition.trip_id}
                    id={condition.id}
                  />
                </Float>

              </Float>
            :
            // <CheckAgree user={this.props.user} tripId={condition.trip_id} condition={condition.id}
            // id={condition.id}/>

            // <EditEx
            // user={this.props.user} tripId={condition.trip_id} condition={condition.id}
            // id={condition.id}

              // find={api.findPassengerAgreement(condition.trip_id, condition.id, this.props.user)}
            // />
            null
              // <RadioToggle toggle user={this.props.user} tripId={condition.trip_id} condition={condition.id}
              // id={condition.id} />
              }

        </Container>

      ))}
    </div>
    );
  }
}

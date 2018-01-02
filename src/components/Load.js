import React, { Component } from 'react';
import browserHistory from '../history';
import styled from 'styled-components';


const Iframe = styled.iframe`
width: 100%;
height: 100%;
position: absolute;
`
const Container = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`

export default class Load extends Component {

  render() {
    return (
      <Container>
        <Iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="100%" height="100%" allowFullScreen/>
      </Container>
      )
  }
}

// @flow

import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import './App.css';

const App = props => (
  <div className="App">
    <Segment
    inverted
    id='header'
    style={{ padding: 8, backgroundColor: '#5a47a5', borderRadius: 0 }}
    >
    <Header
    inverted
    as='h3'
    textAlign='center'
    style={{ margin: 0 }}
    >
      spam
    </Header>
    </Segment>
    <Container>
      eggs
    </Container>
  </div>
)

export default App;
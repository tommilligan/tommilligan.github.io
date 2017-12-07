// @flow

import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "./App.css";
import Logo, {LogoEnum} from "./components/logo";

const App = (props: any) => (
  <div className="App">
    <Segment
      inverted
      id="header"
      style={{ padding: 8, backgroundColor: "#5a47a5", borderRadius: 0 }}
    >
      <Header
        inverted
        as="h3"
        textAlign="center"
        style={{ margin: 0 }}
      >
        spam
      </Header>
    </Segment>
    <Container>
      eggs
      <Logo name={LogoEnum.PYTHON} />
      <Logo name={LogoEnum.HEROKU} />
      <Logo name={LogoEnum.ELASTICSEARCH} />
    </Container>
  </div>
);

export default App;
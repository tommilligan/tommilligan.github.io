// @flow

import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "./App.css";
import Logo, {LogoEnum} from "./components/logo";

const App = (props: any) => {
  const logoArray = Object.keys(LogoEnum).map(logoKey => {
    return (
      <div key={logoKey} style={{ margin: "0 5px" }}>
        <Logo name={LogoEnum[logoKey]} />
      </div>
    );
  });
  return (
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
        eels
      </Container>
      <Segment
        inverted
        style={{ padding: 8, backgroundColor: "#302659", borderRadius: 0 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
          }}>
          {logoArray}
        </div>
      </Segment>
      <Container>
        <Logo name={LogoEnum.PYTHON} />
      </Container>
    </div>
  );
};

export default App;
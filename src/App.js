// @flow

import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";

import Menu from "./menu";
import Welcome from "./welcome";
import Portfolio from "./portfolio";

const App = (props: any) => {
  return (
    <div className="App">
      <Menu />
      <Container>
        <Welcome />
      </Container>
      <Portfolio />
    </div>
  );
};

export default App;
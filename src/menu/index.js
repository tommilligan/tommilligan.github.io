// @flow

import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Menu = (props: any) => {
  return (
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
        hello
      </Header>
    </Segment>
  );
};

export default Menu;


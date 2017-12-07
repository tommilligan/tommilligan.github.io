// @flow

import React from "react";
import { Segment } from "semantic-ui-react";

import Logo, {LogoEnum} from "../../components/logo";

const Technologies = () => {
  const logoArray = Object.keys(LogoEnum).map(logoKey => {
    return (
      <div key={logoKey} style={{ margin: "0 5px" }}>
        <Logo name={LogoEnum[logoKey]} />
      </div>
    );
  });

  return (
    <Segment
      inverted
      style={{ padding: 8, backgroundColor: "#d6d1eb", borderRadius: 0 }}
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
  );
};

export default Technologies;





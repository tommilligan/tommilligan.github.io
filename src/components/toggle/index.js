// @flow

import React from "react";
import type { Node } from "React";

interface P {
  duration?: number,
  children: Node
}

type S = {
  toggled: boolean
}

class Toggle extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      toggled: false
    };
  }

  toggle = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    return (
      <div onClick={this.toggle}>
        <div>
          { this.props.children }
        </div>
        <div style={{ padding: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div 
            style={{
              width: "100%",
              height: 3,
              transition: "background-color 0.75s ease",
              opacity: 0.85,
              borderRadius: 2,
              backgroundColor: (this.state.toggled) ? "white" : ""
            }}>
          </div>
        </div>
      </div>
    );
  }
}

export default Toggle;

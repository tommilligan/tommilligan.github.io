// @flow

import React from "react";
import type { Node } from "React";
import { Motion, spring } from "react-motion";


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
        <div style={{ paddingTop: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>


          <Motion style={{x: spring(this.state.toggled ? 0.85 : 0)}}>
            {({x}) =>
              // children is a callback which should accept the current value of
              // `style`
              <div 
                style={{
                  width: "100%",
                  height: 4,
                  transition: "background-color 0.75s ease",
                  opacity: x,
                  borderRadius: 2,
                  backgroundColor: (this.state.toggled) ? "white" : ""
                }}>
              </div>
            }
          </Motion>
        </div>
      </div>
    );
  }
}

export default Toggle;

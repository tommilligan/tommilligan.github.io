import React from "react";
import { Image } from "semantic-ui-react";
import * as _ from "lodash";

import python from "./svg/python.svg";

const Logo = props => {
  let imageProps = _.omit(props, "logo");
  imageProps.src = python;
  if (props.size === "teensy") {
    imageProps = _.omit(imageProps, "size");
    imageProps.width = 30;
    imageProps.height = 30;
  }
  return <Image {...imageProps} />;
};

export default Logo;

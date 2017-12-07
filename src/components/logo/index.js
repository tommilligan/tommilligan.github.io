// @flow

import React from "react";
import { Image } from "semantic-ui-react";
import Immutable from "immutable";

import python from "./svg/python.svg";
import heroku from "./svg/heroku.svg";
import elasticsearch from "./svg/elasticsearch.svg";

const logoSize = 30;

export const LogoEnum = {
  PYTHON: "PYTHON",
  HEROKU: "HEROKU",
  ELASTICSEARCH: "ELASTICSEARCH"
};

const logoSourcemap: Immutable.Map<$Keys<typeof LogoEnum>, string> = Immutable.Map([
  [LogoEnum.PYTHON, python],
  [LogoEnum.HEROKU, heroku],
  [LogoEnum.ELASTICSEARCH, elasticsearch]
]);

const Logo = ({name}: {name: $Keys<typeof LogoEnum>}) => {
  return (
    <div style={{ width: logoSize, height: logoSize }}>
      <Image
        centered
        src={logoSourcemap.get(name)}
        style={{ maxWidth: logoSize, maxHeight: logoSize }}
      />
    </div>
  );
};

export default Logo;

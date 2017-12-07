// @flow

import React from "react";
import { Image } from "semantic-ui-react";
import Immutable from "immutable";

import d3 from "./svg/d3.svg";
import elasticsearch from "./svg/elasticsearch.svg";
import flask from "./svg/flask.svg";
import github from "./svg/github-icon-1.svg";
import heroku from "./svg/heroku.svg";
import neo4j from "./svg/neo4j.svg";
import python from "./svg/python.svg";
import redis from "./svg/redis.svg";
import travisCi from "./svg/travis-ci.svg";
import vue from "./svg/vue.svg";
import webpack from "./svg/webpack.svg";
import unknown from "./svg/antu-system-help.svg";

export const LogoEnum = {
  D3: "D3",
  ELASTICSEARCH: "ELASTICSEARCH",
  FLASK: "FLASK",
  GITHUB: "GITHUB",
  HEROKU: "HEROKU",
  NEO4J: "NEO4J",
  PYTHON: "PYTHON",
  REDIS: "REDIS",
  TRAVISCI: "TRAVISCI",
  VUE: "VUE",
  WEBPACK: "WEBPACK"
};

const logoSize = 30;

const logoSourcemap: Immutable.Map<$Keys<typeof LogoEnum>, string> = Immutable.Map([
  [LogoEnum.D3, d3],
  [LogoEnum.ELASTICSEARCH, elasticsearch],
  [LogoEnum.FLASK, flask],
  [LogoEnum.GITHUB, github],
  [LogoEnum.HEROKU, heroku],
  [LogoEnum.NEO4J, neo4j],
  [LogoEnum.PYTHON, python],
  [LogoEnum.REDIS, redis],
  [LogoEnum.TRAVISCI, travisCi],
  [LogoEnum.VUE, vue],
  [LogoEnum.WEBPACK, webpack],
]);

const Logo = ({name}: {name: $Keys<typeof LogoEnum>}) => {
  return (
    <div style={{ width: logoSize, height: logoSize }}>
      <Image
        centered
        src={logoSourcemap.get(name, unknown)}
        style={{ maxWidth: logoSize, maxHeight: logoSize }}
      />
    </div>
  );
};

export default Logo;

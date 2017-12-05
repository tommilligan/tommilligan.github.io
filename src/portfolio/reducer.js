// @flow

import Immutable from "immutable";
import type { Map } from "immutable";

import { TOGGLE_TECH, RESET_ALL_TECH } from "./actions";
import type { PortfolioAction } from "./actions";

type Tech = {
  +selected: boolean,
  +description: string,
  +url: string
}

const techs: Map<string, Tech> = Immutable.Map([
  ["python", {
    selected: false,
    description: "Python",
    url: "https://www.python.org/"
  }],
  ["node", {
    selected: false,
    description: "Node.js",
    url: "https://nodejs.org/"
  }]
]);

type PortfolioState = {
  +techs: Map<string, Tech>
}

const initialState: PortfolioState = {
  techs: techs
};

const reducer = (state: PortfolioState = initialState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case TOGGLE_TECH:
      return {
        ...state,
        techs: state.techs.update(action.data, tech => {
          return {
            ...tech,
            selected: !tech.selected
          };
        })
      };
    case RESET_ALL_TECH:
      return {
        ...state,
        techs: state.techs.map(tech => {
          return {
            ...tech,
            selected: false
          };
        })
      };
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
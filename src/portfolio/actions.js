// @flow

export type Toggle_Tech = "portfolio/TOGGLE_TECH";
export const TOGGLE_TECH = "portfolio/TOGGLE_TECH";
export type Reset_All_Tech = "portfolio/RESET_ALL_TECH";
export const RESET_ALL_TECH = "portfolio/RESET_ALL_TECH";

type ToggleTechAction = { type: Toggle_Tech, data: string };
export function toggleTech(data: string): ToggleTechAction {
  return {type: TOGGLE_TECH, data: data};
}

type ResetAllTechAction = { type: Reset_All_Tech, data: null };
export function resetAllTech(): ResetAllTechAction {
  return {type: RESET_ALL_TECH, data: null};
}

export type PortfolioAction =
| ToggleTechAction
| ResetAllTechAction

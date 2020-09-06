import AuthActionTypes from "./auth.types";

export const toggleView = () => ({
  type: AuthActionTypes.TOGGLE_OTHER_VIEW,
});

export const switchView = (view) => ({
  type: AuthActionTypes.SWITCH_VIEW,
  payload: view,
});

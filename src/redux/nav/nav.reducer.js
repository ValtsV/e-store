import NavActionTypes from "./nav.types";

const INITIAL_STATE = {
  hambMenuHidden: false,
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavActionTypes.TOGGLE_HAMB_MENU:
      return { ...state, hambMenuHidden: !state.hambMenuHidden };
    default:
      return state;
  }
};

export default navReducer;

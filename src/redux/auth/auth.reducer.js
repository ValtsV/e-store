import AuthActionTypes from "./auth.types";

const INITIAL_STATE = {
  register: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.TOGGLE_OTHER_VIEW:
      return { ...state, register: !state.register };

    default:
      return { ...state };
  }
};

export default authReducer;

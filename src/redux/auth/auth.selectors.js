import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectAuthView = createSelector(
  [selectAuth],
  (auth) => auth.register
);

import { createSelector } from "reselect";

const selectNav = (state) => state.nav;

export const selectNavHidden = createSelector(
  [selectNav],
  (nav) => nav.hambMenuHidden
);

// import SHOP_DATA from "./dummydata";
// import SHOP_DATA from "./dummydataCopy";
import SHOP_DATA from "./dummydataCopyCopy";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
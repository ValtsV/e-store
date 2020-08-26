const INITIAL_STATE = {
  sections: [
    {
      id: "b1",
      title: "womens collection",
      linkUrl: "shop/womens",
      image: "",
    },
    {
      id: "b2",
      title: "mens collection",
      linkUrl: "shop/mens",
      image: "",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

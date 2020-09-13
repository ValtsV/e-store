const INITIAL_STATE = {
  sections: [
    {
      id: "b1",
      title: "womens collection",
      linkUrl: "womens",
      image: "",
    },
    {
      id: "b2",
      title: "mens collection",
      linkUrl: "mens",
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

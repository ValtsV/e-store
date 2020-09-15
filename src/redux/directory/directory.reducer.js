const INITIAL_STATE = {
  sections: [
    {
      id: "b1",
      title: "womens collection",
      linkUrl: "womens",
      image: "https://i.ibb.co/cx00vZc/chick.png",
    },
    {
      id: "b2",
      title: "mens collection",
      linkUrl: "mens",
      image: "https://i.ibb.co/1KyP4y6/chico.png",
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

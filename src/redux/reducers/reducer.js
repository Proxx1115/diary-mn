const initialState = {
  id: "",
  postID: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "ID") {
    return {
      ...state,
      id: action.id,
    };
  }
  if (action.type === "POST_ID") {
    console.log(action.POST_ID + "=>REDUCER");
    return {
      ...state,
      postID: action.POST_ID,
    };
  }
  return state;
};
export default reducer;

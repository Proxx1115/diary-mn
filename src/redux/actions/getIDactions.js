export const getID = (id) => {
  return {
    type: "ID",
    id,
  };
};
export const postID = (ID) => {
  console.log(ID + "=>ACTION");
  return {
    type: "POST_ID",
    POST_ID: ID,
  };
};

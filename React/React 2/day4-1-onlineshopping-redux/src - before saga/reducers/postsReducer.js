export function posts(defaultStore = [], action) {
  switch (action.type) {
    case "ADD_POST":
      console.log("Within Posts Reducer !! " + action.type);
      return defaultStore;
    case "FETCH_POSTS":
      console.log("Within Posts Reducer !! " + action.type);
      return action.response;
    default:
      return defaultStore;
  }
}

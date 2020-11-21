export function posts(defaultStore = [], action) {
  switch (action.type) {
    case "ADD_POST":
      console.log("Within Posts Reducer !! " + action.type);
      return defaultStore;
    case "FETCH_POSTS":
      console.log("Within Posts Reducer !! " + action.type);
      return action.response;
    case "REQUEST_FAIL":
      console.log("Failed");
      return defaultStore;
    default:
      return defaultStore;
  }
}

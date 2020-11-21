export function questions(defaultStore = [], action) {
  switch (action.type) {
    case "GET_QUESTIONS":
      console.log("Within Questions Reducer" + action.type);
      console.log(action.questions);
      return [...action.questions];
    default:
      return defaultStore;
  }
}

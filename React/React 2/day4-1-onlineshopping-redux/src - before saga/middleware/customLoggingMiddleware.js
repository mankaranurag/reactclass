// middleware is a function  that returns a function

const customLoggingMiddleware = (store) => {
  // this next means after this middleware is executed what you want to do
  return (next) => {
    return (action) => {
      console.group(action.type);
      console.log("Previous Store Data -> ", store.getState());
      console.log(new Date().toISOString());
      console.log("Action Dispatched -> ", action);
      let result = next(action); // dispatch // same as store.dispatch
      console.log("Changed Store Data -> ", store.getState());
      console.groupEnd(action.type);
      return result; // done with execution
    };
  };
};

export default customLoggingMiddleware;

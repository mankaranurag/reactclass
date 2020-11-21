//anything that changes your global data should be your action
// actionCreators are functions that return actions

// import axios from "axios";

export function IncreementLikes(pid) {
  return { type: "INCREEMENT_LIKES", pid: pid };
}

export function IncreementLikesDelay(pid) {
  return { type: "INCREEMENT_LIKES_DELAY", pid: pid };
}

export function AddProduct(newProduct) {
  return { type: "ADD_PRODUCT", newProduct };
}

export function DeleteProduct(pid) {
  return { type: "DELETE_PRODUCT", pid: pid };
}

export function FetchPosts(response) {
  return { type: "FETCH_POSTS", response };
}

export function FetchPostsAsync() {
  return { type: "FETCH_POSTS_ASYNC" };
}

// this is for thunk
// redux does not allow async actions
// actions must be plain objects
//middleware is an extensible functionality
// use of thunk middleware to return a dispatch function
// export function FetchPostsAync() {
//   return (dispatch) =>
//     axios.get("https://jsonplaceholder.typicode.com/posts").then(
//       (response) => {
//         return dispatch(FetchPosts(response.data));
//       },
//       (error) => console.log(error)
//     );
// }

// whenever any action is dispatched all the reducers are notified

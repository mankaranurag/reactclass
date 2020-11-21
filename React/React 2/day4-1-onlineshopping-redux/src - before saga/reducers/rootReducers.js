// given by redux
// combines all the reducers
import { combineReducers } from "redux";
import { products } from "./productsReducer";
import { posts } from "./postsReducer";

//combineReducers({ posts:posts, products:products });
// left key is name of object in store and right is name of reducer
// also be written as
var rootReducer = combineReducers({ posts, products });
export default rootReducer;

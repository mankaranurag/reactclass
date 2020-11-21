import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducers";
//import { logger } from "redux-logger";
//import customLoggingMiddleware from "../middleware/customLoggingMiddleware";
import thunk from "redux-thunk";

let defaultStoreData = {
  products: [
    {
      id: 1,
      title: "Laptop",
      price: 50000,
      quantity: 100,
      rating: 4,
      ImageUrl:
        "https://www.lenovo.com/medias/lenovo-laptop-ideapad-c340-14-amd-hero.png?context=bWFzdGVyfHJvb3R8MjQyMzg2fGltYWdlL3BuZ3xoMGIvaGViLzk5MTUxMzg1Mzk1NTAucG5nfDIyM2E3YjY1ZWI2MTk3NzdhM2QxZjQxYWQzMDA2ZjViNmFmOWIzY2E1MTM3MGM3NDg5YzM2ZDBkYmFiYTgwN2Y",
      likes: 100,
    },
    {
      id: 2,
      title: "OLED TV",
      price: 25000,
      quantity: 0,
      rating: 3.5,
      ImageUrl:
        "https://www.pngkey.com/png/full/280-2808973_shop-our-experts-love-range-of-oled-tvs.png",
      likes: 500,
    },
    {
      id: 3,
      title: "Desktop",
      price: 10000,
      quantity: 200,
      rating: 3,
      ImageUrl:
        "https://www.pngmart.com/files/7/Desktop-Computer-Transparent-Background.png",
      likes: 200,
    },
    {
      id: 4,
      title: "Mobile",
      price: 20000,
      quantity: 1000,
      rating: 5,
      ImageUrl: "https://static.toiimg.com/photo/73078527.cms",
      likes: 400,
    },
    {
      id: 5,
      title: "Camera",
      price: 90000,
      quantity: 0,
      rating: 4,
      ImageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/813CAX2%2BtQL._SL1500_.jpg",
      likes: 100,
    },
  ],
  posts: [{ id: 1, title: "How to seris" }],
};
// createStore() // given by redux
// parameters Reducer, storeData
// storeData does not accept as
//store does not accept multiple reducers
// passing defaultStoreData is not mandatory
// we can also do as
//var store = createStore(rootReducer);
//var store = createStore(rootReducer,defaultStoreData);

// use of redux dev tools only in devlopment phase
// var store = createStore(
//   rootReducer,
//   defaultStoreData,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// use of 3rd party( redux-logger) middleware
// this middleware does automatic logging for redux
// var store = createStore(rootReducer, defaultStoreData, applyMiddleware(logger));

// customMiddleware used
// var store = createStore(
//   rootReducer,
//   defaultStoreData,
//   applyMiddleware(customLoggingMiddleware)
// );

// both logger middleware and  customMiddleware used
// var store = createStore(
//   rootReducer,
//   defaultStoreData,
//   applyMiddleware(customLoggingMiddleware, logger)
// );

// middleware thunk
// https://github.com/reduxjs/redux-thunk
//Redux Thunk middleware allows you to
// write action creators that return a function instead of an action.
// npm install --save redux-thunk
var store = createStore(rootReducer, defaultStoreData, applyMiddleware(thunk));

// saga implementation
// It uses an ES6 feature called Generators to make
// those asynchronous flows easy to read, write and test.
// https://redux-saga.js.org/?_sm_au_=iVV6NfsPW7Z4nZkjL321jK0f1JH33
// npm install --save redux-saga

export default store;

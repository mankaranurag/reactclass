import axios from "axios";
import {
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
  debounce,
  retry,
  race,
} from "redux-saga/effects";
import { FetchPosts, IncreementLikes } from "../actions/actionCreators";

export function* fetchPostsAsyc() {
  //get response from ajax request
  let response = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/posts"
  ); // this call will make axios.get
  yield put(FetchPosts(response.data));
}

export function* watchFetchPosts() {
  // runs for every request
  //yield takeEvery("FETCH_POSTS_ASYNC", fetchPostsAsyc);

  //yield takeEvery("INCREEMENT_LIKES_DELAY", delayIncreementLikes);
  // takes the latest effect from multipe running effects
  // if multiple actions are dispatched
  //yield takeLatest("INCREEMENT_LIKES_DELAY", delayIncreementLikes);

  // debounce effect wait for some interaction to happen
  // delayed effect
  // debounce(timetowait,'' ,'')
  // here debounce will wait for 2000 and  then there will be burst of events
  //yield debounce(2000, "INCREEMENT_LIKES_DELAY", IncreementLikesDebounce);

  // retry
  //yield RetrySaga("FETCH_POSTS_ASYNC", RetrySaga);

  // race
  yield takeEvery("FETCH_POSTS_ASYNC", fetchPostsWithTimeOut);
}

// channel is queing up your tasks
// it is used to pass data between tasks

export function* fetchPostsWithTimeOut() {
  var { posts, timeout } = yield race({
    posts: call(axios.get, "https://jsonplaceholder.typicode.com/posts"),
    timeout: delay(500),
  });
  // here there will be race between axios.get and delay
  // which ever finishes first the yeild will be cleared
  // and posts will be cancelled
  if (posts) {
    yield put(FetchPosts(posts.data));
  } else {
    yield put({ type: "REQUEST_FAIL" });
  }
}

export function* delayIncreementLikes(action) {
  yield delay(500);
  yield put(IncreementLikes(action.pid));
}

export function* IncreementLikesDebounce(action) {
  yield put(IncreementLikes(action.pid));
}

function CallPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/postss");
}

export function* RetrySaga(action) {
  try {
    // retry (max NO of Tries,  within 3 sec , )
    let response = yield retry(3, 5000, CallPosts);
    yield put(FetchPosts(response.data));
  } catch (error) {
    yield put({ type: "REQUEST_FAIL" });
  }
  yield put(IncreementLikes(action.pid));
}

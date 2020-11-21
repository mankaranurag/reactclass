import React from "react";
import { Link } from "react-router-dom";

export default class Posts extends React.Component {
  componentDidMount() {
    // this was for thunk
    //this.props.FetchPostsAync(); // dispatch an action

    // SAGA
    this.props.FetchPostsAsync();
  }

  render() {
    let allPostsToBeCreated = this.props.allPosts.map((p) => (
      <li key={p.id}>
        <Link to={"/postdetails/" + p.id}>{p.title}</Link>
      </li>
    ));
    return (
      <div className="container">
        <h1> All Posts ! </h1>
        <ul className="list-group">{allPostsToBeCreated}</ul>
      </div>
    );
  }
}

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    // make a ajax request
    let aPromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    aPromise.then(
      (response) => this.setState({ posts: response.data }),
      (error) => console.log(error)
    );
  }

  render() {
    let allPostsToBeCreated = this.state.posts.map((p) => (
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

import React, { useState, useEffect } from "react";
import axios from "axios";

export const PostDetails = (props) => {
  const {
    match: { params },
  } = props;
  console.log(params.postId);
  const [post, setpost] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts/" + params.postId;
    let aPromise = axios.get(url);
    aPromise.then(
      (response) => setpost(response.data),
      (error) => console.log(error)
    );
  }, [params.postId]);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1> Post Details for postID : {params.postId}</h1>
        <h3> Posted By User : {post.userId}</h3>
      </div>
      <div className="card col-md-12 center">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

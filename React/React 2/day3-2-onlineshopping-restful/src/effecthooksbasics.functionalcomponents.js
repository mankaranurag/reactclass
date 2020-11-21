import React, { useEffect, useState } from "react";
import axios from "axios";

export const PostsUsingEffectHook = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    let aPromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    aPromise.then(
      (response) => setposts(response.data),
      (error) => console.log(error)
    );
  }, []); // second parameter is what you want to watch
  return (
    <div className="container">
      <div className="jumbotron">
        <h1> All Posts (EffectHook) ! </h1>
      </div>
      <ul className="list-group">
        {posts.map((p) => (
          <li className="list-group-item">{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsUsingEffectHook;

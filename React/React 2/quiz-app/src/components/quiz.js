import { ANY_CATEGORY, ANY_DIFFICULTY } from "./constants";
import { useEffect } from "react";
import axios from "axios";

export const Quiz = (props) => {
  console.log(props);
  let username = props.user.name;
  let category = props.user.category;
  let difficultyLevel = props.user.difficultyLevel;
  let url = "https://opentdb.com/api.php?amount=10&";
  url = url + (category === ANY_CATEGORY ? "" : "category=" + category);
  console.log(url);
  url =
    url +
    (difficultyLevel === ANY_DIFFICULTY
      ? ""
      : "&difficulty=" + difficultyLevel);
  console.log(url);
  useEffect(() => {
    let aPromise = axios.get(url);
    aPromise.then(
      (response) => props.GetQuestions(response.data.results),
      (error) => console.log(error)
    );
  }, [url]);
  return <h1 className="jumbotron">Anurah</h1>;
};

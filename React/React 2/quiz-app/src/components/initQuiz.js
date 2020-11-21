import React from "react";
import {
  ANY_DIFFICULTY,
  EASY,
  MEDIUM,
  HARD,
  ANY_CATEGORY,
  GENERAL_KNOWLEDGE,
  FILMS,
  SCIENCE_AND_NATURE,
  COMPUTER,
} from "./constants";
import { Quiz } from "./quiz";

export default class InitQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "user",
        difficultyLevel: "",
        category: 0,
      },
      isSubmitted: false,
    };
  }

  OnFromSubmit(event) {
    console.log("form submitted !! ");
    event.preventDefault();
    console.log(this.state.user);
    this.setState({ ...this.state, isSubmitted: true });
  }

  render() {
    if (!this.state.isSubmitted) {
      return (
        <div className="container">
          <div className="jumbotron">
            <h2>Quiz</h2>
          </div>
          <form onSubmit={this.OnFromSubmit.bind(this)} className="container">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={this.state.user.name}
                onChange={(e) =>
                  this.setState({
                    user: { ...this.state.user, name: e.target.value },
                  })
                }
                required
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="difficultyLevel">Select Difficulty Level</label>
              <select
                className="form-control form-control-lg"
                id="difficultyLevel"
                value={this.state.user.difficultyLevel}
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      difficultyLevel: e.target.value,
                    },
                    isSubmitted: this.state.isSubmitted,
                  })
                }
              >
                <option value={ANY_DIFFICULTY}>Any Difficulty</option>
                <option value={EASY}>Easy</option>
                <option value={MEDIUM}>Medium</option>
                <option value={HARD}>Hard</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select
                className="form-control form-control-lg"
                id="category"
                value={this.state.user.category}
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      category: parseInt(e.target.value),
                    },
                    isSubmitted: this.state.isSubmitted,
                  })
                }
              >
                <option value={ANY_CATEGORY}>Any Category</option>
                <option value={GENERAL_KNOWLEDGE}>General Knowledge</option>
                <option value={FILMS}>Films</option>
                <option value={SCIENCE_AND_NATURE}>Science And Nature</option>
                <option value={COMPUTER}>Computers</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Start Quiz !!
            </button>
          </form>
        </div>
      );
    } else {
      return <Quiz {...this.props} user={this.state.user} />;
    }
  }
}

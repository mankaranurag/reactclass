import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import InitQuiz from "./initQuiz";

function App(props) {
  return (
    <div className="container">
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/" className="navbar-brand">
            Quiz App
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/history" className="nav-link">
                History
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact render={() => <InitQuiz {...props} />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

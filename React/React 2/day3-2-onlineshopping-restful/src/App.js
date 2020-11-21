import "./App.css";
import React from "react";
import Posts from "./posts.components";
import Message from "./functional.component";
import PostsUsingEffectHook from "./effecthooksbasics.functionalcomponents";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import ListOfProducts from "./ListOfProducts";
import PostDetails from "./postdetails.components";
import { AddNewProduct } from "./addNewProduct.component";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">
            Online Shopping
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newproduct" className="nav-link">
                AddProduct
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/postshooks" className="nav-link">
                Posts(Hooks)
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/message" className="nav-link">
                Message
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={ListOfProducts}></Route>
          <Route path="/posts" exact component={Posts}></Route>
          <Route
            path="/postshooks"
            exact
            component={PostsUsingEffectHook}
          ></Route>
          <Route
            path="/message"
            render={() => <Message msg="Anurag" />}
          ></Route>
          <Route
            path="/postdetails/:postId"
            exact
            component={PostDetails}
          ></Route>
          <Route path="/newproduct/" exact component={AddNewProduct}></Route>
          <Route path="**" render={() => <Redirect to="/" />}></Route>
        </Switch>
      </BrowserRouter>
    );
    // return (
    //   <div>
    //     {/* <Message msg="Anurag" /> */}
    //     {/* <ShoppingCart /> */}
    //     {/* <Posts /> */}
    //   </div>
    // );
    // return (
    //   <div className="container">
    //     <div className="jumbotron">
    //       <h1>Online Shopping</h1>
    //     </div>
    //     <ListOfProducts></ListOfProducts>
    //   </div>
    // );
  }
}
export default App;

//context api
// provider puts into the context to send the context
// consumer  reads

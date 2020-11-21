import "./App.css";
import ListOfProducts from "./ListOfProducts";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import Posts from "./posts.components";

import PostDetails from "./postdetails.components";
import AddNewProduct from "./addNewProduct.component";

// lazy loading
const PostsComponent = lazy(() => import("./posts.components"));
const loader = () => <strong>Loading..</strong>;

export const ProductContext = React.createContext();

export class PropsProvider extends React.Component {
  render() {
    return (
      <ProductContext.Provider
        value={{
          allProducts: this.props.allProducts,
          IncreementLikes: (pid) => this.props.IncreementLikes(pid),
          IncreementLikesDelay: (pid) => this.props.IncreementLikesDelay(pid),
          AddProduct: (newProduct) => this.props.AddProduct(newProduct),
          DeleteProduct: (pid) => this.props.DeleteProduct(pid),
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

function App(props) {
  return (
    <div className="container">
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
              <Link to="/addnewproduct" className="nav-link">
                AddNewProduct
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/posts" className="nav-link">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <PropsProvider {...props}>
                <ListOfProducts />
              </PropsProvider>
            )}
          ></Route>
          <Route
            path="/posts"
            exact
            render={() => (
              <Suspense fallback={loader()}>
                <PostsComponent {...props} />
              </Suspense>
            )}
          ></Route>
          <Route
            path="/postdetails/:postId"
            exact
            render={(reuterprops) => (
              <PostDetails {...props} {...reuterprops} />
            )}
          ></Route>
          <Route
            path="/addnewproduct"
            exact
            render={(reuterprops) => <AddNewProduct {...props} />}
          ></Route>
          {/* <Route path="/posts" exact component={Posts}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

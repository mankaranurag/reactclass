import React from "react";

const LikesContext = React.createContext();
export class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = { likes: 100 };
  }
  render() {
    return (
      <LikesContext.Provider
        value={{
          state: this.state,
          increementLikes: () => this.setState({ likes: this.state.likes + 1 }),
        }}
      >
        {this.props.children}
      </LikesContext.Provider>
    );
  }
}

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <MyProvider>
        <div className="container">
          <h1> Shopping Cart</h1>
          <ProductComp />
        </div>
      </MyProvider>
    );
  }
}

export class ProductComp extends React.Component {
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        <Likes />
      </div>
    );
  }
}

export class Likes extends React.Component {
  render() {
    return (
      <div>
        <LikesContext.Consumer>
          {(context) => (
            <div>
              <h1>Likes COmponent</h1>
              <button
                className="btn btn-primary"
                onClick={context.increementLikes}
              >
                {context.state.likes}
              </button>
            </div>
          )}
        </LikesContext.Consumer>
      </div>
    );
  }
}

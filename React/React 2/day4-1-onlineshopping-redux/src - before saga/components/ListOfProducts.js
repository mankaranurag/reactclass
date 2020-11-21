import React from "react";
import Product from "./Product";
import { ProductContext } from "./App";

export default class ListOfProducts extends React.Component {
  render() {
    // let productsToBeCreated = this.props.allProducts.map((p) => (
    //   <Product productdetails={p} key={p.id} />
    // ));
    return (
      <ProductContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div className="jumbotron">
              <h1>Online Shopping</h1>
            </div>
            <div className="row">
              {context.allProducts.map((p) => (
                <Product productdetails={p} key={p.id} />
              ))}
            </div>
          </React.Fragment>
        )}
      </ProductContext.Consumer>
    );
  }
}

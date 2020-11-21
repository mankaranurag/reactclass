import React from "react";
import { ProductContext } from "./App";

export default class Products extends React.Component {
  render() {
    console.log("Within Render of Product " + this.props.productdetails.id);
    return (
      <React.Fragment>
        <ProductContext.Consumer>
          {(context) => (
            <div className="card col-sm-5 col-md-3">
              <img
                className="card-img-top rounded"
                src={this.props.productdetails.ImageUrl}
                alt={this.props.productdetails.title}
                width="100px"
                height="200px"
              />
              <hr />
              <div className="card-body">
                <h4 className="card-title">
                  {this.props.productdetails.title}
                </h4>
                <p className="card-text">
                  <strong>Price : </strong>
                  <span className="badge badge-dark">
                    {this.props.productdetails.price}
                  </span>
                  <br />
                  <strong>Quantity : </strong>
                  <span className="badge badge-dark">
                    {this.props.productdetails.quantity}
                  </span>
                  <br />
                  <strong>Rating : </strong>
                  <span className="badge badge-dark">
                    {this.props.productdetails.rating}
                  </span>
                  <br />
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    context.IncreementLikesDelay(this.props.productdetails.id)
                  }
                >
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  {this.props.productdetails.likes}
                </button>
                <button
                  className="btn btn-danger float-right"
                  onClick={() =>
                    context.DeleteProduct(this.props.productdetails.id)
                  }
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          )}
        </ProductContext.Consumer>
      </React.Fragment>
    );
  }
}

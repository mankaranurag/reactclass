import React from "react";
import "./Product.css";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentLikes: this.props.productdetails.likes };
  }

  IncreementLikes() {
    this.setState({ currentLikes: this.state.currentLikes + 1 });
  }

  render() {
    console.log("Within Render of Product " + this.props.productdetails.id);
    return (
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
          <h4 className="card-title">{this.props.productdetails.title}</h4>
          <p className="card-text">
            <strong>Price : </strong> {this.props.productdetails.price} <br />
            <strong>Quantity : </strong> {this.props.productdetails.quantity}{" "}
            <br />
            <strong>Rating : </strong> {this.props.productdetails.rating} <br />
          </p>
          <button
            className="btn btn-primary"
            onClick={this.IncreementLikes.bind(this)}
          >
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            {this.state.currentLikes}
          </button>
          <button
            className="btn btn-danger float-right"
            onClick={() =>
              this.props.deleteProduct(this.props.productdetails.id)
            }
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

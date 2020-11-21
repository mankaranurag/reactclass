import React from "react";
import "./product.component.css";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currLikes:this.props.productdetails.likes}
  }

  IncrementLikes(){
    this.setState({currLikes:this.state.currLikes + 1})
  }

  componentWillUnmount(){
    console.log('Within componentWillUnmount -> Product ');    
  }


  render() {
    return (
      <div className="col-sm-5 col-md-4">
        <div className="productStyle">       
        <h1>{this.props.productdetails.title}</h1>
        <img
          src={this.props.productdetails.ImageUrl}
          height="100px"
          width="100px"
        />
        <br />
        <strong>Price : </strong> {this.props.productdetails.price} <br />
        <strong>Quantity : </strong> {this.props.productdetails.quantity} <br />
        <strong>Rating : </strong> {this.props.productdetails.rating} <br />
        <button className="btn btn-primary" onClick={this.IncrementLikes.bind(this)}>
          <span className="glyphicon glyphicon-thumbs-up"></span>
          {this.state.currLikes}
        </button>{" "}
        <button className="btn btn-danger" onClick={()=>this.props.DeleteProduct(this.props.productdetails.id)}>
          <span className="glyphicon glyphicon-trash"></span>       
        </button>
        </div>
      </div>
    );
  }
}

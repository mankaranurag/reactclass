import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const AddNewProduct = (props) => {
  const [submitted, setIsSubmitted] = useState(false);

  const [newProduct, setnewProduct] = useState({
    id: 0,
    title: "",
    quantity: 0,
    price: 0.0,
    rating: 0.0,
    likes: 0,
    ImageUrl: "",
  });
  function OnFromSubmit(event) {
    console.log("form submitted !! ");
    event.preventDefault();
    console.log(event);
    props.AddProduct(newProduct);
    setIsSubmitted(true);
  }
  if (!submitted) {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1> Add New Product</h1>
        </div>
        <form onSubmit={OnFromSubmit}>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter ID"
              id="id"
              value={newProduct.id}
              onChange={(e) =>
                setnewProduct({ ...newProduct, id: parseInt(e.target.value) })
              }
            />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              id="name"
              value={newProduct.title}
              onChange={(e) =>
                setnewProduct({ ...newProduct, title: e.target.value })
              }
            />
            <label htmlFor="quantity">quantity:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter quantity"
              id="quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setnewProduct({
                  ...newProduct,
                  quantity: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="price">price:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter price"
              id="price"
              value={newProduct.price}
              onChange={(e) =>
                setnewProduct({
                  ...newProduct,
                  price: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="rating">rating:</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Enter rating"
              id="rating"
              value={newProduct.rating}
              onChange={(e) =>
                setnewProduct({
                  ...newProduct,
                  rating: parseFloat(e.target.value),
                })
              }
            />
            <label htmlFor="likes">likes:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter likes"
              id="likes"
              value={newProduct.likes}
              onChange={(e) =>
                setnewProduct({
                  ...newProduct,
                  likes: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="ImageUrl">ImageUrl:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ImageUrl"
              id="ImageUrl"
              value={newProduct.ImageUrl}
              onChange={(e) =>
                setnewProduct({ ...newProduct, ImageUrl: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default AddNewProduct;

import React from "react";
import Product from "./product.component";

class ListOfProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "Laptop",
          price: 50000,
          quantity: 100,
          rating: 4,
          ImageUrl:
            "https://www.lenovo.com/medias/lenovo-laptop-ideapad-c340-14-amd-hero.png?context=bWFzdGVyfHJvb3R8MjQyMzg2fGltYWdlL3BuZ3xoMGIvaGViLzk5MTUxMzg1Mzk1NTAucG5nfDIyM2E3YjY1ZWI2MTk3NzdhM2QxZjQxYWQzMDA2ZjViNmFmOWIzY2E1MTM3MGM3NDg5YzM2ZDBkYmFiYTgwN2Y",
          likes: 100,
        },
        {
          id: 2,
          title: "OLED TV",
          price: 25000,
          quantity: 0,
          rating: 3.5,
          ImageUrl:
            "https://www.pngkey.com/png/full/280-2808973_shop-our-experts-love-range-of-oled-tvs.png",
          likes: 500,
        },
        {
          id: 3,
          title: "Desktop",
          price: 10000,
          quantity: 200,
          rating: 3,
          ImageUrl:
            "https://www.pngmart.com/files/7/Desktop-Computer-Transparent-Background.png",
          likes: 200,
        },
        {
          id: 4,
          title: "Mobile",
          price: 20000,
          quantity: 1000,
          rating: 5,
          ImageUrl: "https://static.toiimg.com/photo/73078527.cms",
          likes: 400,
        },
        {
          id: 5,
          title: "Camera",
          price: 90000,
          quantity: 0,
          rating: 4,
          ImageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/813CAX2%2BtQL._SL1500_.jpg",
          likes: 100,
        },
      ],
    };
  }

  componentWillMount(){
    console.log('Within componentWillMount');
  }
  componentDidMount(){
    // integrate frameworks, AJAX
    console.log('Within componentDidMount');
  }

  shouldComponentUpdate(){
    // console.log(this.state)
    // console.log(arguments);
    console.log('Within shouldComponentUpdate');
    return true;    // return false to stop unnecessary re-renders
  }

  componentWillUpdate(){
    console.log('Within componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('Within componentDidUpdate');
  }

  DeleteProductHandler(theId){
    // delete operation on state -> products
    console.log("Within Parent's DeleteProductHandler : " + theId);    
    let newProductList = this.state.products.filter(p=>p.id !== theId);
    this.setState({products:newProductList});
  }

  render() {  
    console.log(this.state)
    console.log('Within render !') 
    let productsToBeCreated = this.state.products.map((p) => (
      <Product productdetails={p} key={p.id}
        DeleteProduct={(theId)=>this.DeleteProductHandler(theId)}
      />
    ));
    return (   

      <React.Fragment>
        <div className="jumbotron">
          <h1>Online Shopping</h1>
        </div>
        <div className="row">
          {productsToBeCreated} 
        </div>
      </React.Fragment>
    );
    // babel JS converts JSX to React API !
  }
}

export default ListOfProducts;

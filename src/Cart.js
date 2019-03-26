import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductsData from "./Data";

class Cart extends React.Component {
  getProducts() {
    const products = ProductsData.products.map(product => (
      <Product
        productName={product.name}
        price={product.cost}
        limit={product.stock}
      />
    ));
    return products;
  }
  render() {
    const products = this.getProducts();
    return (
      <div>
        <h2>Add your products here!</h2>
        <div className="page-content">{products}</div>
      </div>
    );
  }
}

export default Cart;

import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductsData from "./Data";
import Recipt from "./Receipt";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleAddToCart(productName, price) {
    const cartItems = this.state.cartItems;
    if (cartItems.some(item => item.productName === productName)) {
      cartItems.find(item => item.productName === productName).count++;
    } else {
      cartItems.push({
        productName: productName,
        price: price,
        count: 1
      });
    }
    this.setState({
      cartItems: cartItems
    });
  }

  handleRemoveFromCart(productName, price) {
    const cartItems = this.state.cartItems;
    if (cartItems.some(item => item.productName === productName)) {
      const product = cartItems.find(item => item.productName === productName);
      product.count --;
      if (product.count === 0) {
        cartItems.splice(cartItems.indexOf(productName), 1);
      }
    }
    this.setState({
      cartItems: cartItems
    });
  }

  getProducts() {
    const products = ProductsData.products.map(product => (
      <Product
        productName={product.name}
        price={product.cost}
        onAddToCart={this.handleAddToCart}
        onRemoveFromCart={this.handleRemoveFromCart}
      />
    ));
    return products;
  }
  render() {
    const products = this.getProducts();
    return (
      <div>
        <h2>Add your products here!</h2>
        <div className="page-content">
          {products}
          <Recipt
            items={this.state.cartItems}
          />
        </div>
      </div>
    );
  }
}

export default Cart;

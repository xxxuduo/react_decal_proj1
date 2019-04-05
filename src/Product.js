import React from "react";
import PropTypes from "prop-types";
import "./styles/cart.css";
import "./Data.js";
class Product extends React.Component {
  render() {
    return (
      <div class="cards">
        <div class="content">
          <div class="name">{this.props.productName}</div>
          <div class="price">Price: ${this.props.price}</div>
        </div>
        <div class="ui bottom attached button" onClick={() => this.props.onAddToCart(this.props.productName, this.props.price)}>
          <i class="add icon" />
          Add Cart
        </div>
        <div class="ui bottom attached button" onClick={() => this.props.onRemoveFromCart(this.props.productName, this.props.price)}>
          <i className="remove icon" />
          Remove from Cart
        </div>
      </div>
    );
  }
}
export default Product;

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

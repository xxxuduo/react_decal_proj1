import React from "react";
import PropTypes from "prop-types";
import "./styles/cart.css";
import "./Data.js";
// const Product = props => {
//   //render verified icon
//   function renderName() {
//     return <h1>{props.productName}</h1>;
//   }

//   //Header should contain avatar, name, username, and verified.
//   function renderLimit() {
//     return (
//       <div className="numbers">
//         {props.price}
//         {props.cost}
//       </div>
//     );
//   }

//   // ----- DON'T MODIFY BELOW -----
//   return (
//     <div className="App">
//       <div className="top">{renderName()}</div>
//       {renderLimit()}
//     </div>
//   );
// };

// export default Product;

class Product extends React.Component {
  addToCart() {
    const productName =
      this.props.limit > 1
        ? `${this.props.productName}s`
        : `${this.props.productName}`;
    alert(`You have ${this.props.limit} ${productName} in your cart!`);
  }
  render() {
    return (
      <div class="cards">
        <div class="content">
          <div class="name">{this.props.productName}</div>
          <div class="price">Price: ${this.props.price}</div>
        </div>
        <div class="ui bottom attached button" onClick={() => this.addToCart()}>
          <i class="add icon" />
          Add Cart
        </div>
      </div>
    );
  }
}
export default Product;

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
};

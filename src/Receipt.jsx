import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item">
        <p>
          {item.productName} x {item.count}
        </p>
        <p>${item.price * item.count}</p>
      </div>
    );
  }

  render() {
    const items = this.props.items;
    let total = 0;
    items.forEach(item => {
      total += item.price * item.count;
    });
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${total.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;

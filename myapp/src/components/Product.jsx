import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={() => this.props.history.push("/products")}>
          Save this product In Browser History
        </button>
        <button onClick={() => this.props.history.replace("/products")}>
          Don't Save this product In Browser History
        </button>
      </React.Fragment>
    );
  }
}

export default Product;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  render() {
    let products = this.props.data;
    return (
      <React.Fragment>
        {products.map(product => (
          <div>
            <Link to={"/product/" + product}>{product}</Link>
          </div>
        ))}
        Posts:
        <br />
        <Link to={"/post/2018/02"}>Feb 2018</Link>
        <br />
        <Link to={"/post/2018/06"}>June 2018</Link>
        <br />
      </React.Fragment>
    );
  }
}

export default Products;

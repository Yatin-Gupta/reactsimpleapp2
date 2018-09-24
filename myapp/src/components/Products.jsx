import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Product from "./Product";

class Products extends Component {
  render() {
    let products = this.props.data;
    return (
      <React.Fragment>
        {products.map(product => (
          <div>
            <Link to={"/products/product/" + product}>{product}</Link>
          </div>
        ))}
        <div className="content">
          <Route path="/products/product/:id" component={Product} />
          {/*without products it not pick route
          from products*/}
        </div>
        Posts:
        <br />
        <Link to={"/post/2018/02"}>Feb 2018</Link>
        <br />
        <Link to={"/post/2018/06"}>June 2018</Link>
        <br />
        Articles:
        <br />
        <Link to={"/article?year=2018&month=02"}>Feb 2018</Link>
        <br />
        <Link to={"/article?year=2018&month=06"}>June 2018</Link>
        <br />
      </React.Fragment>
    );
  }
}

export default Products;

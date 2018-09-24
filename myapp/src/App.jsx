import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Post from "./components/Post";

class App extends Component {
  products = ["prod1", "prod2", "prod3"];
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar />
          <div className="routes">
            <Switch>
              <Route path="/product/:id" component={Product} />
              <Route
                path="/products"
                render={props => <Products data={this.products} {...props} />}
              />
              <Route path="/post/:year?/:month?" component={Post} />
              {/*here implicitly 3 props comes history, location and match */}
              {/*To pass additional props we can do as*/}
              {/*<Route path="/product" render={(props) => <Product additionalParams="" {...props} /> here instead of
              component we use render and pass additional parameter as shown but props(implicit one
               history, location and match will be visible when props is passed in render and need
                to put it with Product as shown) */}
              <Route path="/" component={Home} />
            </Switch>
            {/*<Route path="/" exact component={Home} />*/}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

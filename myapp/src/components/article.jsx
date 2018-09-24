import React, { Component } from "react";
import queryString from "query-string";

class Article extends Component {
  render() {
    const { location } = this.props;
    let sendQueryString = location.search;
    const result = queryString.parse(sendQueryString);
    console.log(result); //note boolean/number passed in query string also turns to string
    return (
      <div>
        Year: {result.year} Month: {result.month}
      </div>
    );
  }
}

export default Article;

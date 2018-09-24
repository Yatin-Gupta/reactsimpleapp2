import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        Year: {this.props.match.params.year} Month:{" "}
        {this.props.match.params.month}
      </div>
    );
  }
}

export default Post;

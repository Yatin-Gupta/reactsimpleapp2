import React, { Component } from "react";

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Year: {this.props.match.params.year} Month:{" "}
        {this.props.match.params.month}
      </div>
    );
  }
}

export default Post;

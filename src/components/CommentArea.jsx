import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  render() {
    return (
      <>
        <AddComment elementId={this.props.elementId} />
        <CommentsList elementId={this.props.elementId} />
      </>
    );
  }
}

export default CommentArea;

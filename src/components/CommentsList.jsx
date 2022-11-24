import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class CommentsList extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.elementId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmJhOGQ4MzkzNTAwMTVlOGM0YWUiLCJpYXQiOjE2NjkyOTUwMTYsImV4cCI6MTY3MDUwNDYxNn0.Z15UvL3hG6GWARjXrB98XKSUvgAXuGD0KAtYLns3EKA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        let filteredArray = data.filter((comment) =>
          comment.author.includes("sandro")
        );
        this.setState({
          comments: filteredArray,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  deleteComment = async (commentId) => {
    console.log(
      "https://striveschool-api.herokuapp.com/api/comments/" + commentId
    );
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmJhOGQ4MzkzNTAwMTVlOGM0YWUiLCJpYXQiOjE2NjkyOTUwMTYsImV4cCI6MTY3MDUwNDYxNn0.Z15UvL3hG6GWARjXrB98XKSUvgAXuGD0KAtYLns3EKA",
          },
        }
      );
      if (response.ok) {
        alert("Comment deleted!");
      }
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
    console.log(this.props.elementId);
  }

  render() {
    return (
      <>
        <h4>Previous Comments</h4>
        <ListGroup className="mt-4">
          {this.state.comments.map((r) => (
            <ListGroup.Item
              key={r._id}
              onClick={() => this.deleteComment(r._id)}
            >
              {r.rate} out of 10 - {r.comment}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}
export default CommentsList;

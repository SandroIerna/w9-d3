import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    elementId: "",
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNmJhOGQ4MzkzNTAwMTVlOGM0YWUiLCJpYXQiOjE2NjkyOTUwMTYsImV4cCI6MTY3MDUwNDYxNn0.Z15UvL3hG6GWARjXrB98XKSUvgAXuGD0KAtYLns3EKA",
          },
        }
      );
      if (response.ok) {
        alert("Comment saved!");
        this.setState({
          comment: "",
          rate: "1",
          elementId: "",
        });
      } else {
        console.log("ERROR!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      ...this.state,
      [fieldToSet]: value,
    });
  };

  componentDidMount() {
    this.setState({ elementId: this.props.elementId });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add your comment"
              required
              value={this.state.comment}
              onChange={(e) => this.onChangeHandler(e.target.value, "comment")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.rate}
              onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default AddComment;

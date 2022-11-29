import { Component, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = () => {
  const [comment, setComment] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YmQ4YmQ4MDNjMjAwMTVlY2VkZDgiLCJpYXQiOjE2Njk2NDM2NjAsImV4cCI6MTY3MDg1MzI2MH0.OucnUsqfTAnlNm9rYFOwRCUQDJf0bnELnjpMIxJLA_w",
          },
        }
      );
      if (response.ok) {
        alert("Comment saved!");
        setComment({
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

  const onChangeHandler = (value, fieldToSet) => {
    setComment({ ...comment, [fieldToSet]: value });

    // this.setState({
    //   ...this.state,
    //   [fieldToSet]: value,
    // });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.elementId !== this.props.elementId)
  //     this.setState({ elementId: this.props.elementId });
  // }
  useEffect(() => {
    setComment({ ...comment, [comment.elementId]: comment.elementId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment.elementId]);

  return (
    <div>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your comment"
            required
            value={comment.comment}
            onChange={(e) => onChangeHandler(e.target.value, "comment")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) => onChangeHandler(e.target.value, "rate")}
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
};

export default AddComment;

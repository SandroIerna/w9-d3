import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const CommentsList = ({ elementId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + elementId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg0YmQ4YmQ4MDNjMjAwMTVlY2VkZDgiLCJpYXQiOjE2Njk2NDM2NjAsImV4cCI6MTY3MDg1MzI2MH0.OucnUsqfTAnlNm9rYFOwRCUQDJf0bnELnjpMIxJLA_w",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        let filteredArray = data.filter((comment) =>
          comment.author.includes("opossum")
        );
        setComments(filteredArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.elementId !== elementId) {
  //     console.log("Id changed");
  //     this.fetchComments();
  //   }
  // }

  useEffect(() => {
    console.log("Id changed");
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementId]);

  // componentDidMount() {
  //   this.fetchComments();
  //   console.log(this.props.elementId);
  // }
  useEffect(() => {
    fetchComments();
    console.log(elementId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h4>Previous Comments</h4>
      <ListGroup className="mt-4">
        {comments.map((r) => (
          <ListGroup.Item key={r._id} onClick={() => deleteComment(r._id)}>
            {r.rate} out of 10 - {r.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CommentsList;

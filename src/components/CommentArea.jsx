import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentArea = ({ elementId }) => {
  return (
    <>
      <AddComment elementId={elementId} />
      <CommentsList elementId={elementId} />
    </>
  );
};

export default CommentArea;

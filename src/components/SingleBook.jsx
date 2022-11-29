import { Card } from "react-bootstrap";
import { useState } from "react";

const SingleBook = ({ book, handleStateChange }) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <>
      <Card
        className={selected ? "selected-shadow my-card" : ""}
        onClick={() => {
          handleStateChange(book.asin);
          handleSelected();
        }}
      >
        <Card.Img className={"my-card-img"} src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;

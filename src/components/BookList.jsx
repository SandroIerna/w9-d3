import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ booksArray, handleStateChange, selected }) => {
  const [filter, setFilter] = useState("");

  const filterBookList = (value) => {
    setFilter(value);
  };

  return (
    <Container>
      <input
        type="text"
        onKeyUp={(e) => filterBookList(e.target.value)}
      ></input>
      <Row>
        {booksArray
          .filter((book) => book.title.includes(filter))
          .map((book) => {
            return (
              <Col lg={3} md={4} sm={6} className="my-2" key={book.asin}>
                <SingleBook
                  book={book}
                  handleStateChange={handleStateChange}
                  selected={selected}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default BookList;

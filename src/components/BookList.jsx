import { Component } from "react";
import history from "../data/history.json";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

class BookList extends Component {
  state = {
    filter: "",
  };

  filterBookList = (value) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    return (
      <Container>
        <input
          type="text"
          onKeyUp={(e) => this.filterBookList(e.target.value)}
        ></input>
        <Row>
          {history
            .filter((book) => book.title.includes(this.state.filter))
            .map((book) => {
              return (
                <Col lg={3} md={4} sm={6} className="my-2" key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default BookList;

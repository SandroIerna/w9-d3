import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import history from "./data/history.json";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBookAsin: "",
    selected: false,
  };

  handleStateChange = (handleAsin) => {
    console.log("Clicked", handleAsin);
    this.setState({ selectedBookAsin: handleAsin });
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <div>
        <WarningSign alertText="Danger!" />
        <MyBadge badgeText="This is a badge" badgeColor="secondary" />
        <Row>
          <Col xs={6}>
            <BookList
              booksArray={history}
              handleStateChange={this.handleStateChange}
              selected={this.state.selected}
            />
          </Col>
          <Col xs={6}>
            <CommentArea elementId={this.state.selectedBookAsin} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

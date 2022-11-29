import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import history from "./data/history.json";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const App = () => {
  const [selectedBookAsin, setSelectedBookAsin] = useState("");
  const [selected, setSelected] = useState(false);

  const handleStateChange = (handleAsin) => {
    setSelectedBookAsin(handleAsin);
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <div>
      <WarningSign alertText="Danger!" />
      <MyBadge badgeText="This is a badge" badgeColor="secondary" />
      <Row>
        <Col xs={8}>
          <BookList
            booksArray={history}
            handleStateChange={handleStateChange}
            selected={selected}
          />
        </Col>
        <Col xs={4}>
          <CommentArea elementId={selectedBookAsin} />
        </Col>
      </Row>
    </div>
  );
};

export default App;

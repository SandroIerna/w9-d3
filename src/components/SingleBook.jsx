import { Card } from "react-bootstrap";
import { Component } from "react";
class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleSelected = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <>
        <Card
          className={this.state.selected ? "selected-shadow my-card" : ""}
          onClick={() => {
            this.props.handleStateChange(this.props.book.asin);
            this.handleSelected();
          }}
        >
          <Card.Img className={"my-card-img"} src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SingleBook;

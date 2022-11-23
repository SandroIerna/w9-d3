import { Alert } from "react-bootstrap";

const WarningSign = ({ alertText }) => (
  <Alert variant="danger">{alertText}</Alert>
);

export default WarningSign;

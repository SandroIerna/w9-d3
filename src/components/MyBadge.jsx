import { Badge } from "react-bootstrap";

const MyBadge = ({ badgeText, badgeColor }) => {
  return <Badge variant={badgeColor}>{badgeText}</Badge>;
};

export default MyBadge;

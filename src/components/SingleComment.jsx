import { ListGroup } from "react-bootstrap";

function SingleComment({ comment }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        Rate: "{comment.rate}"
      </ListGroup.Item>
      <ListGroup.Item>
        Comment: "{comment.comment}"
      </ListGroup.Item>
      <ListGroup.Item>
        Author: "{comment.author}"
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;

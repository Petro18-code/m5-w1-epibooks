import { Card, Col } from "react-bootstrap";
import "../AllMyBooks.css";
import { useState } from "react";
import CommentArea from "./CommentArea";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  }
  return (
    <Col xs={12} md={6} lg={3} className="d-flex align-items-stretch">
      <Card className={selected ? "book-cover d-flex flex-column w-100 redBorder" : "book-cover d-flex flex-column w-100"} >
        <Card.Img variant="top" src={book.img} onClick={handleClick} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-center book-price ">
            {book.price} €
          </Card.Text>
          <Card.Text className="text-center book-category ">
            Category: {book.category.toUpperCase()}
          </Card.Text>
          {selected && <CommentArea asin={book.asin}/>}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;

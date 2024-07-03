import { Card, Col } from "react-bootstrap";
import "../AllMyBooks.css";
import { useState } from "react";

function SingleBook({ book }) {
  const [border, setBorder] = useState(false);
  const handleClick = () => {
    setBorder(!border);
  }
  return (
    <Col xs={12} md={6} lg={3} className="d-flex align-items-stretch">
      <Card className={border ? "book-cover d-flex flex-column w-100 redBorder" : "book-cover d-flex flex-column w-100"} onClick={handleClick}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-center book-price ">
            {book.price} €
          </Card.Text>
          <Card.Text className="text-center book-category ">
            Category: {book.category.toUpperCase()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;

import { Card, Col, Row } from "react-bootstrap";
import { romance } from '../data/romance.js';
import "../AllMyBooks.css";

function AllMyBooks() {
  return (
    <Row className="g-4">
      {romance.map((book) => {
        return (
          <Col xs={12} md={6} lg={4} key={book.asin} className="d-flex align-items-stretch">
            <Card className="book-cover d-flex flex-column w-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="text-center book-price ">{book.price} €</Card.Text>
                <Card.Text className="text-center book-category ">Category: {book.category.toUpperCase()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default AllMyBooks;
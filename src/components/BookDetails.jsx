import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { romance, fantasy, horror, scifi, history } from "../data/romance.js";
import CommentArea from "./CommentArea";

const BookDetails = () => {
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const allBooks = [...romance, ...fantasy, ...horror, ...scifi, ...history];
    const selectedBook = allBooks.find((b) => b.asin === asin);
    setBook(selectedBook);
  }, [asin]);

  if (!book) {
      return <div>Book not found</div>;
    }

    return (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Img variant="top" src={book.img} className="object-fit-cover" />
              <Card.Body>
                <Card.Title style={{ color: 'black' }}>
                  {book.title}
                </Card.Title>
                <Card.Text className="text-center">
                    {book.price} €
                </Card.Text>
              </Card.Body>
            </Card>
            <CommentArea asin={asin} />
          </Col>
        </Row>
      )
}

export default BookDetails
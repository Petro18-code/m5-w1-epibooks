import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import { romance } from "../data/romance";

const BookDetails = () => {
    const params = useParams();
    const foundBook = romance.find((book) => book.asin === params.asin);

    return (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Img variant="top" src={foundBook.img} className="object-fit-cover" />
              <Card.Body>
                <Card.Title style={{ color: 'black' }}>
                  {foundBook.title}
                </Card.Title>
                <Card.Text className="text-center">
                    {foundBook.price} €
                </Card.Text>
              </Card.Body>
            </Card>
            <CommentArea asin={params.asin} />
          </Col>
        </Row>
      )
}

export default BookDetails
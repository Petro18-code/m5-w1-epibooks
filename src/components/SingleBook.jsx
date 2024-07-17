import { Card, Col } from "react-bootstrap";
import "../AllMyBooks.css";
import {  useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function SingleBook({ book, selected, handleClick }) {
  const {theme} = useContext(ThemeContext);

  return (
    <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch">
      <Card className={theme === 'light' ? "book-cover d-flex flex-column w-100" : "book-cover d-flex flex-column w-100 bg-dark text-white"}>
        <Card.Img variant="top" src={book.img} className={selected === book.asin ? "object-fit-cover redBorder" : "object-fit-cover"} onClick={() => handleClick(book.asin)}/>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-center book-price ">
            {book.price} €
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;

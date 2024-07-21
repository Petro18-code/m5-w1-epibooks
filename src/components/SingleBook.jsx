import { Card, Col, Button } from "react-bootstrap";
import "../AllMyBooks.css";
import {  useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useNavigate } from "react-router-dom";

function SingleBook({ book, selected, handleClick }) {
  const {theme} = useContext(ThemeContext);
  const navigate = useNavigate()


  return (
    <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch">
      <Card data-testid="book-card" className={theme === 'light' ? "book-cover d-flex flex-column w-100" : "book-cover d-flex flex-column w-100 bg-dark text-white"}>
        <Card.Img variant="top" data-testid="book-img" src={book.img} className={selected === book.asin ? "object-fit-cover redBorder" : "object-fit-cover"} onClick={() => handleClick(book.asin)}/>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className="text-center book-price ">
            {book.price} €
          </Card.Text>
          <Button
            className="w-100 mt-2"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;

import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { romance } from "../data/romance.js";
import { InputGroup, Form } from "react-bootstrap";
import { useState } from "react";

function AllMyBooks() {
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState(romance);
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const resultTemp = romance.filter((book) => book.title.toLowerCase().includes(event.target.value.toLowerCase())||book.asin.toLowerCase().includes(event.target.value));
    setResultSearch(resultTemp);
  }
  return (
      <Row className="g-4">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search any book"
            aria-label="Search any book"
            aria-describedby="basic-addon2"
            onChange={handleSearch}
          />
        </InputGroup>
        {resultSearch.map((b) => (<SingleBook key={b.asin} book={b}></SingleBook>))}
      </Row>
  );
}

export default AllMyBooks;

import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

function AllMyBooks({ resultSearch }) {
  const [selected, setSelected] = useState(null);
  const handleClick = (asin) => {
    if (selected === asin) {
      setSelected(null);
    } else {setSelected(asin);}
    
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <Row className="g-4">
            {resultSearch.map((b) => (
              <SingleBook
                key={b.asin}
                book={b}
                selected={selected}
                handleClick={handleClick}
              ></SingleBook>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          {selected && <CommentArea asin={selected}/>}
        </Col>
      </Row>
    </>
  );
}

export default AllMyBooks;

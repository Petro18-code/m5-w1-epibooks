import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
function AddComment({ asin }) {
  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin,
  });

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSaveComment = async () => {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MmEyNGEyNGEwNTAwMTViZmFkOTEiLCJpYXQiOjE3MjAxOTk3MTYsImV4cCI6MTcyMTQwOTMxNn0.-vW5M3OFNx1Po22grJk9XH_XzdQVS9Myi0b0eUQNEtA",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formValue),
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          type="number"
          placeholder="Rate"
          min={1}
          max={5}
          name="rate"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          onChange={handleChange}
        />
        <Button variant="primary" onClick={handleSaveComment}>
          Send Comment
        </Button>
      </Form.Group>
    </Form>
  );
}

export default AddComment;

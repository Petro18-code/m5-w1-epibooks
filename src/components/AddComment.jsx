import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
function AddComment({ asin, loadComments }) {
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };

  const [formValue, setFormValue] = useState(initialFormState);
  const [alert, setAlert] = useState({ show: false, variant: "", message: "" });

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSaveComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MmEyNGEyNGEwNTAwMTViZmFkOTEiLCJpYXQiOjE3MjAxOTk3MTYsImV4cCI6MTcyMTQwOTMxNn0.-vW5M3OFNx1Po22grJk9XH_XzdQVS9Myi0b0eUQNEtA",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formValue),
        }
      );
      if (response.ok) {
        loadComments();
        setFormValue({ initialFormState });
        setAlert({
          show: true,
          variant: "success",
          message: "Comment successfully added",
        });
      } else {
        setAlert({
          show: true,
          variant: "danger",
          message: "Please enter a value between 1 and 5",
        });
      }
    } catch (error) {
      setAlert({
        show: true,
        variant: "danger",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <>
      {alert.show && (
        <Alert
          variant={alert.variant}
          onClose={() => setAlert({ ...alert, show: false })}
          dismissible
        >
          {alert.message}
        </Alert>
      )}
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
            value={formValue.rate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            onChange={handleChange}
            value={formValue.comment}
          />
          <Button variant="primary" onClick={handleSaveComment} className="mt-3">
            Send Comment
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default AddComment;

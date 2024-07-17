import { useEffect, useState } from "react";
import { ListGroup, Form } from "react-bootstrap";

function SingleComment({ comment, loadComments }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MmEyNGEyNGEwNTAwMTViZmFkOTEiLCJpYXQiOjE3MjAxOTk3MTYsImV4cCI6MTcyMTQwOTMxNn0.-vW5M3OFNx1Po22grJk9XH_XzdQVS9Myi0b0eUQNEtA",
            "Content-Type": "application/json",
          },
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Commento cancellato");
        loadComments();
      } else {
        alert("Commento non cancellato");
      }
    } catch (error) {
      alert("Riprova più tardi");
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  const [formValue, setformValue] = useState({});

  const editForm = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const initialFormEdit = {
      rate: comment.rate,
      comment: comment.comment,
      elementId: comment.elementId,
    };
    setformValue(initialFormEdit);
  }, [comment])
  const handleEdit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MmEyNGEyNGEwNTAwMTViZmFkOTEiLCJpYXQiOjE3MjAxOTk3MTYsImV4cCI6MTcyMTQwOTMxNn0.-vW5M3OFNx1Po22grJk9XH_XzdQVS9Myi0b0eUQNEtA",
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(formValue),
        }
      );
      if (response.ok) {
        alert("Modificato corrrettamente");
        loadComments();
        setIsEditing(false);
        // setformValue(initialFormEdit);
      } else {
        alert("Errore nella modifica");
      }
    } catch (error) {
      alert("Riprova più tardi.");
    }
  };
  const handleChange = (ev) => {
    setformValue({ ...formValue, [ev.target.name]: ev.target.value });
  };

  return (
    <ListGroup className="mb-3">
      <ListGroup.Item>{comment.author} </ListGroup.Item>
      <ListGroup.Item>
        {isEditing ? (
          <Form.Control
            className="mb-3 w-100"
            type="number"
            min="1"
            max="5"
            name="rate"
            onChange={handleChange}
            value={formValue.rate}
          />
        ) : (
          comment.rate
        )}
      </ListGroup.Item>
      <ListGroup.Item>
        {isEditing ? (
          <Form.Control
            as="textarea"
            className="mb-3 w-100"
            aria-label="With textarea"
            name="comment"
            onChange={handleChange}
            value={formValue.comment}
          />
        ) : (
          comment.comment
        )}
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-center">
        <i class="fa-solid fa-trash mx-3" onClick={handleDelete}></i>
        <i
          class="fa-solid fa-pen mx-3"
          onClick={() => {
            isEditing ? handleEdit() : editForm();
          }}
        ></i>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;

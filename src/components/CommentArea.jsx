import { useEffect } from "react";
import { useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg4MmEyNGEyNGEwNTAwMTViZmFkOTEiLCJpYXQiOjE3MjAxOTk3MTYsImV4cCI6MTcyMTQwOTMxNn0.-vW5M3OFNx1Po22grJk9XH_XzdQVS9Myi0b0eUQNEtA",
        },
      }
    );
    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <>
      <AddComment asin={asin} />
      <CommentList comments={comments} />
    </>
  );
}

export default CommentArea;

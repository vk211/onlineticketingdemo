import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MovieCard({ image, title, text, link }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to={link}>
          <Button style={{ cursor: "pointer" }} variant="danger">
            Book
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

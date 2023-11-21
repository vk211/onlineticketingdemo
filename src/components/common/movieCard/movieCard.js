import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './movieCard.css'
// function MovieCard({ image, title, genre, rating,director ,cast,synopsis,link}) {
  // return (
    // <Card>
      {/* <Card.Img variant="top" src={image} /> */}
      {/* <Card.Body> */}
        {/* <Card.Title>{title}</Card.Title> */}
        {/* <Card.Text>{text}</Card.Text> */}
        {/* <Link to={link}> */}
          {/* <Button style={{ cursor: "pointer" }} variant="danger"> */}
            {/* Book */}
          {/* </Button> */}
        {/* </Link> */}
      {/* </Card.Body> */}
    {/* </Card> */}
  // );
// }

// import React from 'react';
// import { Card, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
// import { Link } from 'react-router-dom'; // Assuming you are using React Router

function MovieCard({image, title, genre, rating,director ,cast,synopsis,link
}) {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Genre:</strong> {genre}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
        <Card.Text>
          <strong>Director:</strong> {director}
        </Card.Text>
        <Card.Text>
          <strong>Cast:</strong> {cast}
        </Card.Text>
        <Card.Text>
          <strong>Synopsis:</strong> {synopsis}
        </Card.Text>
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




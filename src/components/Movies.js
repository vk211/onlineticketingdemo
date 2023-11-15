import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import Image1 from "../images/Movies/1.avif";
import Image2 from "../images/Movies/2.avif";
import Image3 from "../images/Movies/3.avif";
import Image4 from "../images/Movies/4.avif";
import Image5 from "../images/Movies/5.avif";
import MovieCard from "./common/movieCard/movieCard";
import React from "react";

const movies = [
  {
    image: Image1,
    title: "RamSetu",
    text: "This is a wider card with supporting",
    link: "/movieid",
  },
  {
    image: Image2,
    title: "Black Panther",
    text: "This card has supporting",
    link: "/movieid",
  },
  {
    image: Image3,
    title: "RamSetu",
    text: "This is a wider card with supporting",
    link: "/movieid",
  },
  {
    image: Image4,
    title: "Black Panther",
    text: "This card has supporting",
    link: "/movieid",
  },  {
    image: Image5,
    title: "RamSetu",
    text: "This is a wider card with supporting",
    link: "/movieid",
  },


  // add more movies here...
];

function Movies() {
  return (
    <>
      <Carousel
        interval={null}
        style={{
          width: "90%",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel.Item>
          <CardGroup>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              image={movie.image}
              title={movie.title}
              text={movie.text}
              link={movie.link}
            />
          ))}




          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              image={movie.image}
              title={movie.title}
              text={movie.text}
              link={movie.link}
            />
          ))}
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Movies;
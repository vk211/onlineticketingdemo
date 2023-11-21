// import Carousel from "react-bootstrap/Carousel";
import './styles/movies.css';
import CardGroup from "react-bootstrap/CardGroup";
import Image1 from "../images/Movies/1.avif";
import Image2 from "../images/Movies/2.avif";
import Image3 from "../images/Movies/3.avif";
import Image4 from "../images/Movies/4.avif";
import Image5 from "../images/Movies/5.avif";
import MovieCard from "./common/movieCard/movieCard";
import React,{useEffect,useState} from "react";



function Movies() {
  const [movies, setmovies] = useState([]);
  const [user, setUsers] = useState([]);

  useEffect(() => {
    // Define the function to fetch users
    const fetchMovies = async () => {
      try {
        // Make a GET request using fetch
        const response = await fetch('http://localhost:3000/movie'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response JSON
        const data = await response.json();

        // Update the state with the fetched users
        setmovies(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Call the fetchUsers function
    fetchMovies();
  }, []); 
  console.log(movies)
  return (
      
          <CardGroup className="movie_cards">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.movie_id}
              image={Image1}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              director={movie.director}
              cast={movie.cast}
              synopsis={movie.synopsis}
              link={'/movieid'}
            />
          ))}




          </CardGroup>

      
  );
}

export default Movies;
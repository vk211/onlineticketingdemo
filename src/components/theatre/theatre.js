import React, { useState, useEffect } from "react";
import TheatreCard from "../common/theatreCard/theatreCard";

import "./theatre.css";

const TheatreSelection = () => {
  const [theatres, setTheatres] = useState([]);
  useEffect(() => {
    // Define the function to fetch users
    const fetchtheatre = async () => {
      try {
        // Make a GET request using fetch
        const response = await fetch("http://localhost:3000/movieid");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the response JSON
        console.log("theatre", theatres);
        const data = await response.json();
        // Update the state with the fetched users
        setTheatres(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    // Call the fetchUsers function
    fetchtheatre();
  }, []);

  const [selectedTheatre, setSelectedTheatre] = useState("");
  console.log("theatre", theatres);
  const handleChange = (event) => {
    setSelectedTheatre(event.target.value);
  };

  return (
    <div className="theatre-selection">
      <h2>Select a Theatre</h2>
      <div className="grid">
        {theatres.map((theatre) => (
          <TheatreCard
            key={theatre.movie_id}
            name={theatre.name}
            location={theatre.location}
            capacity={theatre.capacity}
            facilities={theatre.facilities}
            city={theatre.city}
          />
        ))}
      </div>
    </div>
  );
};

export default TheatreSelection;

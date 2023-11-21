import React from 'react';
import { useNavigate } from "react-router-dom";

import './theatreCard.css';
const TheatreCard = ({ name, location, capacity, facilities, city }) => {
    let navigate=useNavigate()
    function handlebooking(){
      navigate('/theatreid')
      alert(`THE booking for the ${name}`)
    }
    return (
            <div className="theatre-card">
                <h2>{name}</h2>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Capacity:</strong> {capacity}</p>
                <p><strong>facilities:</strong> {facilities}</p>
                <p><strong>City:</strong> {city}</p>
                <button onClick={handlebooking}>Book</button>
            </div>
    );
};

export default TheatreCard;

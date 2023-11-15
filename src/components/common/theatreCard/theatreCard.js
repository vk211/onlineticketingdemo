import React from 'react';
import { useNavigate } from "react-router-dom";

import './theatreCard.css';
const TheatreCard = ({data}) => {
    let navigate=useNavigate()
    function handlebooking(){
      navigate('/seatselection')
    }
    return (
        <div className="theatre-card">
            <div className="theatre-info">
                <div className="theatre-title">{data}</div>
                <button className="view-button" onClick={handlebooking}>Book</button>
            </div>
            
        </div>
    );
};

export default TheatreCard;

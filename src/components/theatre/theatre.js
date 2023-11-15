import React, { useState } from 'react';
import TheatreCard from '../common/theatreCard/theatreCard';

import './theatre.css'






const TheatreSelection = ({ theatres }) => {
    const [selectedTheatre, setSelectedTheatre] = useState('');

    const handleChange = (event) => {
        setSelectedTheatre(event.target.value);
    };

    return (
        <div className="theatre-selection">
            <h2>Select a Theatre</h2>
            <div className="grid">
                {theatres.map((theatre, index) => (
                    <TheatreCard data={theatre}/>
                ))}
            </div>
        </div>
    );
};

export default TheatreSelection;

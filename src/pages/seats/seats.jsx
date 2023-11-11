import React, { useState } from 'react';
import SummaryScreen from '../summarypage/summary';

const SeatsScreen = () => {
  // State to manage selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Array of available seats
  const availableSeats = [
    { id: 1, label: 'A1' },
    { id: 2, label: 'A2' },
    { id: 3, label: 'A3' },
    // Add more seats as needed
  ];

  // Function to handle seat selection
  const handleSeatClick = (seat) => {
    // Check if the seat is already selected
    const isSelected = selectedSeats.includes(seat);

    // If selected, remove from the list; otherwise, add to the list
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <>
    <div>
      <h2>Seats Selection</h2>
      <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>

      <div>
        <h3>Available Seats</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {availableSeats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => handleSeatClick(seat)}
              style={{
                margin: '5px',
                padding: '10px',
                backgroundColor: selectedSeats.includes(seat) ? 'green' : 'lightgray',
              }}
            >
              {seat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
    <div>
        <SummaryScreen selectedSeats={availableSeats}/>
    </div>
    </>
  );
};

export default SeatsScreen;

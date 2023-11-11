import React from 'react';

const SummaryScreen = ({ selectedSeats }) => {
  return (
    <div>
      <h2>Summary</h2>
      {selectedSeats.length > 0 ? (
        <div>
          <p>You have selected the following seats:</p>
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat.id}>{seat.label}</li>
            ))}
          </ul>
          <p>Thank you for your selection!</p>
        </div>
      ) : (
        <p>No seats selected. Please go back and choose seats.</p>
      )}
    </div>
  );
};

export default SummaryScreen;

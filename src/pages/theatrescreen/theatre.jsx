import React from 'react';
import SeatsScreen from '../seats/seats';

const TheatreScreen = () => {
  return (
    <>
    <div className="theatre-screen">
      <h2>Welcome to the Theatre</h2>
    </div>
    <div>
        <SeatsScreen/>
    </div>
    </>
  );
};

export default TheatreScreen;

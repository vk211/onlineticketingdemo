import React from 'react';
import TheatreScreen from '../theatrescreen/theatre';

const HomeScreen = () => {
  return (
    <>
    <div>
      <h1>Welcome to Your App</h1>
      <p>This is your home screen. Customize it as per your application's requirements.</p>
    </div>
    <div>
        <TheatreScreen/>
    </div>
    </>
    
  );
};

export default HomeScreen;

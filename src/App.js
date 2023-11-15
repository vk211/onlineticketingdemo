import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider";
import Bookticket from "./components/Bookticket";
import Movies from "./components/Movies";
import SignUp from "./components/signup";
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import TheatreSelection from "./components/theatre/theatre";
import BookingConfirmation from "./components/summarypage/summarypage";
const theatres = [
  'Theatre 1',
  'Theatre 2',
  'Theatre 3',
  'Theatre 4',
  'Theatre 5',
  // Add more theatre names as needed
];
function App() {
  return (
      <Routes>
        <Route  path="/" element={<><Navbar1 /><Slider /><Movies />  </>}/>
        <Route  path="/movies" element= {<Movies />} />
        <Route path="/bookingblack" element= {<TheatreSelection theatres={theatres} />} />
        <Route path="/bookingbhediya" element= {<TheatreSelection theatres={theatres} />} />
        <Route path="/signup" element= {<SignUp />} />
        <Route path="/seatselection" element={<Bookticket name="moviename"/>}/>
        <Route path="/summary" element={<BookingConfirmation 
    bookingDetails={{
        id: '123456',
        name: 'John Doe',
        date: '2023-11-14',
        time: '15:46',
    }}
/>
} />

      </Routes>
  );
}

export default App;
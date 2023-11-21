import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider";
import Bookticket from "./components/Bookticket";
import Movies from "./components/Movies";
import SignUp from "./components/signup";
import React,{useState,useEffect} from 'react';
import {  Routes, Route } from "react-router-dom";
import TheatreSelection from "./components/theatre/theatre";
import BookingConfirmation from "./components/summarypage/summarypage";
function App() {
const [user, setUsers] = useState([]);
useEffect(() => {
  // Define the function to fetch users
  const fetchUsers = async () => {
    try {
      // Make a GET request using fetch
      const response = await fetch('http://localhost:3000/users')
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response JSON
      const data = await response.json();
      // Update the state with the fetched users
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  // Call the fetchUsers function
  fetchUsers();
}, []); 
  return (
      <Routes>
        <Route  path="/" element={<><Navbar1 /><Slider /><Movies />  </>}/>
        {/* <Route  path="/movies" element= {<Movies />} /> */}
        <Route path="/movieid" element= {<TheatreSelection  />} />
        <Route path="/signup" element= {<SignUp />} />
        <Route path="/theatreid" element={<Bookticket name="moviename"/>}/>
        <Route path="/summary" element={<BookingConfirmation 
    bookingDetails={{
        id: '1',
        name: 'John Doe',
        date: '2023-11-22',
        time: '12:30',
    }}
/>
} />

      </Routes>
  );
}

export default App;
import React from 'react';
import './summarypage.css';
import { useNavigate } from "react-router-dom";
const BookingConfirmation = ({ bookingDetails }) => {
    let navigate = useNavigate();
function handleredirect(e) {
    e.preventDefault();
    navigate('/');
}
    

    return (
        <div className="confirmation-page">
            <h2>Booking Confirmation <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></h2>
            <p>Thank you for your booking!</p>
            <div className="booking-details">
                <p><strong>Booking ID:</strong> {bookingDetails.id}</p>
                <p><strong>Name:</strong> {bookingDetails.name}</p>
                <p><strong>Date:</strong> {bookingDetails.date}</p>
                <p><strong>Time:</strong> {bookingDetails.time}</p>
            </div>

        <div  className='RedirectpageButtom' onClick={handleredirect} > Return to Home Page </div>
        </div>
        
    );
};

export default BookingConfirmation;

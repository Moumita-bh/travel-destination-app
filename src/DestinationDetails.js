import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from './data';

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleBookFlight = () => {
    alert(`Flight booked to ${destination.name} on ${date} at ${time} for $${destination.price}!`);
    navigate('/');
  };

  return (
    <div className="details">
      {destination ? (
        <>
          <img src={destination.image} alt={destination.name} className="details-image" />
          <h1>{destination.name}</h1>
          <p>{destination.description}</p>
          <p><strong>Price:</strong> ${destination.price}</p>

          <div className="booking">
            <label>
              Select Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label>
              Select Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <button onClick={handleBookFlight} style={{ backgroundColor: 'green' }}>Book Flight</button>
          </div>
        </>
      ) : (
        <p>Destination not found.</p>
      )}
    </div>
  );
};

export default DestinationDetails;

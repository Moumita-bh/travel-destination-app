import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { destinations } from './data';
import { FiSearch } from 'react-icons/fi';
import './App.css';

const Home = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  const cardWidth = 170; // Adjust this to the actual width of your cards including margin
  const visibleCardsCount = 5; // Number of cards that can be seen without scrolling

  const handleCardClick = (id) => {
    navigate(`/destination/${id}`);
  };

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= cardWidth * 5; // Scroll left by 5 cards
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += cardWidth * 5; // Scroll right by 5 cards
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter destinations based on search term
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const shouldShowScrollButtons = filteredDestinations.length > visibleCardsCount;

  return (
    <div className="home-container">
      {/* Heading */}
      <h1 className="home-heading">Explore Destinations</h1>

      {/* Search container */}
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for a destination..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FiSearch className="search-icon" />
        </div>

        {/* Login and Sign In Buttons */}
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
        <button className="signin-button" onClick={() => navigate('/signin')}>Sign In</button>
      </div>

      {/* Scroll container for card list and buttons */}
      <div className="scroll-container">
        {/* Left Scroll Button */}
        {shouldShowScrollButtons && (
          <button
            className="scroll-button scroll-button-left"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            &lt;
          </button>
        )}

        {/* Destination list */}
        <div className="destination-list" ref={listRef}>
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="card"
                onClick={() => handleCardClick(destination.id)}
              >
                <img src={destination.image} alt={destination.name} className="card-image" />
                <h2 className="card-title">{destination.name}</h2>
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>

        {/* Right Scroll Button */}
        {shouldShowScrollButtons && (
          <button
            className="scroll-button scroll-button-right"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

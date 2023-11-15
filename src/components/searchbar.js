import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Simulate fetching suggestions from an API
    const newSuggestions = getMockSuggestions(inputValue);
    setSuggestions(newSuggestions);
  };

  const getMockSuggestions = (input) => {
    // Mock data - Replace with actual API call
    const mockData = ['React', 'JavaScript', 'Node.js', 'Redux', 'CSS', 'HTML'];

    // Filter suggestions based on user input
    return mockData.filter((item) => item.toLowerCase().includes(input.toLowerCase()));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

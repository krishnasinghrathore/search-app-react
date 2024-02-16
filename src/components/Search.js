// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.bing.microsoft.com/v7.0/search?q=${query}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': 'c4d346682da547e19fb6c47263aa5ccb',
        },
      });

      setResults(response.data.webPages.value);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

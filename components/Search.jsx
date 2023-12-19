import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [ingredients, setIngredients] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch ()  {
    try {
      
      const apiUrl = 'https://fridge-forager-backend.onrender.com/api/edamam-recipes';

      // Make a GET request to your backend with the entered ingredients
      const response = await axios.get(`${apiUrl}?ingredients=${encodeURIComponent(ingredients)}`);
      setSearchResults(response.data.recipes); // Assuming the response contains recipe data
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div>
      <h2>Recipe Search</h2>
      <label>
        Enter Ingredients:
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((recipe, index) => (
              <li key={index}>{recipe.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;

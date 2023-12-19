import React, { useState } from 'react';
import axios from 'axios';

//under construction

const RenderSearch = () => {


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

export default RenderSearch;

import React from 'react';

const RenderRecipes = (props) => {
  console.log(props.searchResults);

  return (
    <div>
      <h2>Rendered Recipes</h2>
      <ul>
        {props.searchResults.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.title}</h3>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Instructions: {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderRecipes;

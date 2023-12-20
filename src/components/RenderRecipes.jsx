
import React from 'react';
import { useLocation } from 'react-router-dom';
import RecipeList from './RecipeList';

const RenderRecipes = (props) => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <div>
      <h2>Rendered Recipes</h2>
      <RecipeList searchResults={props.searchResults || []} />
      
    </div>
  );
};

export default RenderRecipes;



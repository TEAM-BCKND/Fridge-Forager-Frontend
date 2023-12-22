import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './RenderRecipes.css';

const RenderRecipes = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const handleSearch = async () => {
            setIsLoading(true);
            setError('');
            try {
                const protein = searchParams.get('protein');
                const vegetable = searchParams.get('vegetable');
                const starch = searchParams.get('starch');
                const query = [];
                if (protein) query.push(`protein:${protein}`);
                if (vegetable) query.push(`vegetable:${vegetable}`);
                if (starch) query.push(`starch:${starch}`);
                const queryString = encodeURIComponent(query.join('+'));
                const apiUrl = `https://fridge-forager-backend.onrender.com/api/edamam-recipes?ingredients=${queryString}`;
                const response = await axios.get(apiUrl);
                
                console.log('API Response:', response.data);
                console.log('API Response:', response.data.recipes.image);
                console.log('API Response:', response.data.recipes.images);

        if (response.data.recipes && Array.isArray(response.data.recipes.hits)) {
          const recipes = response.data.recipes.hits.map(hit => hit.recipe);
          setSearchResults(recipes);
      } else {
          setError('No recipes found or the API structure is different than expected.');
          console.error('API structure is different than expected:', response.data);
      }
  } catch (error) {
      setError('Error searching recipes: ' + error.message);
      console.error('Error searching recipes:', error);
  } finally {
      setIsLoading(false);
  }
};

        if (searchParams.get('protein') || searchParams.get('vegetable') || searchParams.get('starch')) {
            handleSearch();
        }
    }, [searchParams]);
    

    return (
        <div>
            <h2>Rendered Recipes</h2>
            <p>
                <a href="https://highmid-fridge-platformer.netlify.app" target="_blank" rel="noopener noreferrer">
                    Visit our Fridge Platformer Game while you wait
                </a>
            </p>
            {isLoading ? (
                <p>Loading recipes....</p>
            ) : error ? (
                <p className="error-message">{error}</p>
            ) : (
                <div className="recipes-container">
                    {searchResults.map((recipe, index) => (
                        <div key={index} className="recipe-card">
                            <img src={recipe.image} alt="Recipe" className="recipe-image"/>
                            <div className="recipe-details">
                                <h3>{recipe.label}</h3>
                                <ul>
                                    {recipe.ingredients.map((ingredient, i) => (
                                        <li key={i}>
                                            {ingredient.quantity} {ingredient.measure} {ingredient.food}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RenderRecipes;

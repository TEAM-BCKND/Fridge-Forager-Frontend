import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';

const IngredientForm = () => {
    const [protein, setProtein] = useState('');
    const [vegetable, setVegetable] = useState('');
    const [starch, setStarch] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const queryParams = new URLSearchParams({
            protein,
            vegetable,
            starch
        }).toString();

        try {
            const apiUrl = `https://fridge-forager-backend.onrender.com/api/edamam-recipes?ingredients=${queryParams}`;
            const response = await axios.get(apiUrl);
            setRecipes(response.data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <div className="ingredient-form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    placeholder="Protein"
                />
                <input
                    type="text"
                    value={vegetable}
                    onChange={(e) => setVegetable(e.target.value)}
                    placeholder="Vegetable"
                />
                <input
                    type="text"
                    value={starch}
                    onChange={(e) => setStarch(e.target.value)}
                    placeholder="Starch"
                />
                <button type="submit">Search Recipes</button>
            </form>
            <RecipeList searchResults={recipes} />
        </div>
    );
};

export default IngredientForm;
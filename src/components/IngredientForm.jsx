import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HandleSearch from './HandleSearch';
import './IngredientForm.css';


//ChatGPT was consulted for this function

const IngredientForm = () => {
    const [protein, setProtein] = useState('');
    const [vegetable, setVegetable] = useState('');
    const [starch, setStarch] = useState('');
    const navigate = useNavigate();
   
    const handleSubmit = (event) => {
        console.log('Submitting form...');
        event.preventDefault();
        // Construct a query string with the ingredients

        const queryParams = new URLSearchParams({
            protein,
            vegetable,
            starch
        }).toString();
        // Redirect to the search route with query parameters
        navigate(`/RenderRecipes?${queryParams}`);
    };

    return (
        <div className="search-container">
            <h2>Find a Recipe</h2> {/* Title for the form */}
            <p>Enter the ingredients you have, and we'll find recipes that match.</p> {/* Instructional text */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    placeholder="Enter a protein (e.g., chicken)"
                />
                <input
                    type="text"
                    value={vegetable}
                    onChange={(e) => setVegetable(e.target.value)}
                    placeholder="Enter a vegetable (e.g., broccoli)"
                />
                <input
                    type="text"
                    value={starch}
                    onChange={(e) => setStarch(e.target.value)}
                    placeholder="Enter a starch (e.g., rice)"
                />
                <button type="submit">Search Recipes</button>
            </form>
        </div>
    );
};

export default IngredientForm;



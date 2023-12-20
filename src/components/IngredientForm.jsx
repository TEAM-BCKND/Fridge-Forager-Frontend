import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HandleSearch from './HandleSearch';

//ChatGPT was consulted for this function

const IngredientForm = () => {
    const [protein, setProtein] = useState('');
    const [vegetable, setVegetable] = useState('');
    const [starch, setStarch] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
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
            <div className="profile-section">
                <div className="profile-picture">
                    {/* Placeholder for profile picture */}
                </div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
            </div>
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
                <button type="submit" onClick={() => HandleSearch(protein, vegetable, starch)}>Search Recipes</button>

            </form>
            <div className="about-section">
                {/* Placeholder for about me section */}
            </div>
        </div>
    );
};

export default IngredientForm;



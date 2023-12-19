import React, { useState } from 'react';

const IngredientForm = ({ onSearch }) => {
    const [name, setName] = useState('');
    const [protein, setProtein] = useState('');
    const [vegetable, setVegetable] = useState('');
    const [starch, setStarch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ name, protein, vegetable, starch });
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
                <button type="submit">Search Recipes</button>
            </form>
            <div className="about-section">
                {/* Placeholder for about me section */}
            </div>
        </div>
    );
};

export default IngredientForm;



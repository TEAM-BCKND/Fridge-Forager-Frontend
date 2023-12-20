import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

import RenderRecipes from './RenderRecipes';


const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    useEffect(() => {
        // Function to handle the search
        const handleSearch = async () => {
            try {
                const protein = searchParams.get('protein');
                const vegetable = searchParams.get('vegetable');
                const starch = searchParams.get('starch');
                const query = [];
                console.log('this is the query', query);
                if (protein) query.push(`protein:${protein}`);
                if (vegetable) query.push(`vegetable:${vegetable}`);
                if (starch) query.push(`starch:${starch}`);
                // Join the query terms with commas, and encode them for the URL
                const queryString = encodeURIComponent(query.join(','));
                const apiUrl = `https://fridge-forager-backend.onrender.com/api/edamam-recipes?ingredients=${queryString}`;
                console.log('Searching recipes with query:', queryString);
                const response = await axios.get(apiUrl);
                setSearchResults(response.data.recipes); // Assuming the response contains recipe data

                // Redirect to RenderRecipes page with search results as a state
                if (response.data.recipes.length > 0) {
                    navigate('/RenderRecipes', { state: { searchResults: response.data.recipes } });
                }

            } catch (error) {
                console.error('Error searching recipes:', error);
            }
        };
        // Call the search function if any of the parameters are present
        if (searchParams.get('protein') || searchParams.get('vegetable') || searchParams.get('starch')) {
            handleSearch();
        }
    }, [searchParams]);
    console.log(searchResults)
    return (
        <div>

            <RenderRecipes searchResults={searchResults} />
        </div>
    );
};
export default SearchResults;
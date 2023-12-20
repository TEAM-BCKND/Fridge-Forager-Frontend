
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';



const RenderRecipes = () => {


    const [searchResults, setSearchResults] = useState([]);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        // Function to handle the search
        const handleSearch = async () => {
            try {
                const protein = searchParams.get('protein');
                const vegetable = searchParams.get('vegetable');
                const starch = searchParams.get('starch');
                const query = [];
                if (protein) query.push(`protein:${protein}`);
                if (vegetable) query.push(`vegetable:${vegetable}`);
                if (starch) query.push(`starch:${starch}`);
                // Join the query terms with commas, and encode them for the URL
                const queryString = encodeURIComponent(query.join('+'));
                const apiUrl = `https://fridge-forager-backend.onrender.com/api/edamam-recipes?ingredients=${queryString}`;
                console.log('Searching recipes with query:', apiUrl);
                const response = await axios.get(apiUrl);
                setSearchResults(response.data.recipes); // Assuming the response contains recipe data




            } catch (error) {
                console.error('Error searching recipes:', error);
            }
        };
        // Call the search function if any of the parameters are present
        if (searchParams.get('protein') || searchParams.get('vegetable') || searchParams.get('starch')) {
            handleSearch();
        }
    }, []);
    return (
        <div>
            <h2>Rendered Recipes</h2>

            <p>
                {JSON.stringify(searchResults)}

            </p>


        </div>
    );
};

export default RenderRecipes;

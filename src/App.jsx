import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Home from './components/Home';
import IngredientForm from './components/IngredientForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import HandleSearch from './components/HandleSearch';
import RenderSearch from './components/RenderSearch';

export default function App() {
    const [recipes, setRecipes] = useState([]);

    //Calls API to fetch recipes and updates with results
    //Use '/ingredient-search' in search bar
    const handleSearch = async (ingredients) => {
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search" element={<RenderSearch />} />
                {/* Add IngredientForm in one of the routes or in the Home component */}
                <Route path="/ingredient-search" element={<IngredientForm onSearch={HandleSearch} />} />
            </Routes>
        </Router>
    );
}

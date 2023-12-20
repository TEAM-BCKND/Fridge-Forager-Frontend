
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Home from './components/Home';
import IngredientForm from './components/IngredientForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './components/ProfilePage';
import HandleSearch from './components/HandleSearch';

import LaunchPage from './components/LaunchPage';
import Footer from './components/Footer';
import RenderRecipes from './components/RenderRecipes';

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
                <Route exact path='/' element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/search" element={<HandleSearch />} />
                <Route path="/launch" element={<LaunchPage />} />
                <Route path="/RenderRecipes" element={<RenderRecipes />} />
                {/* Add IngredientForm in one of the routes or in the Home component */}


                <Route path="/ingredient-search" element={<IngredientForm onSearch={handleSearch} />} />
                <Route path="/profilepage" element={<ProfilePage />} />


            </Routes>
            <Footer />
        </Router>
    );
}

function Landing() {

    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return <UserProfile />;

    } else {
        return <h1>Please Sign Up</h1>
    }


}

function UserProfile() {
    return (
        <h1>UserProfile</h1>
    )
}
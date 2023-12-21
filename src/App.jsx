
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import IngredientForm from './components/IngredientForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './components/ProfilePage';
import HandleSearch from './components/HandleSearch';
import './App.css';
import LaunchPage from './components/LaunchPage';
import Footer from './components/Footer';
import RenderRecipes from './components/RenderRecipes';
import Gallery from './components/Gallery';


export default function App() {
    const [recipes, setRecipes] = useState([]);

    //Calls API to fetch recipes and updates with results
    //Use '/ingredient-search' in search bar
    const handleSearch = async (ingredients) => {
    };

    return (
        <div>
            <Router>
                <Header />
                <div className="main-content">
                <Routes>
                    <Route exact path='/' element={<LaunchPage />} />
                    <Route path="/home" element={<LaunchPage />} />

                    <Route path="/search" element={<HandleSearch />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/RenderRecipes" element={<RenderRecipes />} />
                    {/* Add IngredientForm in one of the routes or in the Home component */}

                    <Route path="/ingredient-search" element={<IngredientForm onSearch={handleSearch} />} />
                    <Route path="/profilepage" element={<ProfilePage />} />

                </Routes>
                </div>
            </Router>
            <Footer />
        </div>
    );
}

function Landing() {

    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return <ProfilePage />;

    } else {
        return <h1>Please Sign Up</h1>
    }


}


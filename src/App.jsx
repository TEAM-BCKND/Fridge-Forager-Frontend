
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

    const initialRecipe = {
        name: 'Chicken Biryani',
        image: 'https://static.wixstatic.com/media/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg',
        ingredients: 'Chicken, rice',
        instructions: 'Put the boiling water in a saucepan, add the washed rice, boil for 5 minutes and drain. Layer the chicken mixture with the rice starting with the rice then the chicken mixture and repeat this twice. Garnish with cumin seeds, and ginger. Lower the heat and simmer for a further 10 minutes.'
    };
    const [recipes, setRecipes] = useState([initialRecipe]);


    function addRecipe(newRecipe){
        console.log(newRecipe);
        setRecipes([...recipes, newRecipe]);
    }
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
                    <Route path="/profilepage" element={<ProfilePage addRecipe={addRecipe} recipes={recipes}/>} />

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


import React, { useRef , useState , useEffect} from 'react';
import './ProfilePage.css';
import RecipeUploadModal from './RecipeUploadModal';
import Carousel from 'react-bootstrap/Carousel';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import DefaultPicture from './DendiFace.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const SERVER_API = import.meta.env.VITE_USER_SERVER_URL;

export default function ProfilePage() {

    const [recipes, setRecipes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showCarousel, setShowCarousel] = useState(true);
    const [userProfile, setUserProfile] = useState(null);
    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();


    const fileInputRef = useRef(null);
    const recipeInputRef = useRef(null);
    const customUserData = "hell yeah";
    const userName = customUserData?.name;
    const userProfilePicture = customUserData?.picture;
    const userRecipes = [];
    const userProfileUrl = `${SERVER_API}/users/${user.sub}`;

    useEffect(() => {
        if (isAuthenticated) {
            handleUserProfile();
        }
    }, [isAuthenticated, user]);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    useEffect(() => {
        console.log("Current Recipes:", recipes);
    }, [recipes]);

    const handleRecipeSubmit = (recipeData) => {
        setRecipes([...recipes, { 
            id: recipes.length + 1, 
            title: recipeData.name, 
            image: recipeData.image,
            ingredients: recipeData.ingredients,
            instructions: recipeData.instructions
        }]);
        setShowModal(false);
    };
    
    const toggleDisplay = () => {
        setShowCarousel(!showCarousel);
    };

    const handleProfileImageClick = () => {
        fileInputRef.current.click();
    };

    const handleProfileImageUpload = (event) => {
        console.log(event.target.files[0]);

    };

    const handleRecipeUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
    
        const newRecipe = { id: recipes.length + 1, title: file.name };
        setRecipes([...recipes, newRecipe]);
    
        console.log("Updated Recipes:", recipes);
        console.log();
    };
    
    const handleUserProfile = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(`${SERVER_API}/users/${user.sub}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data) {
                setUserProfile(response.data);
            } else {
                const newUserProfile = {
                    name: user.name,
                    email: user.email,
                    picture: user.picture
                };

                await axios.post(`${SERVER_API}/users`, newUserProfile, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUserProfile(newUserProfile);
            }
        } catch (error) {
            console.error("Error handling user profile", error);
        }
    };

    return (
        <div>
            <div className="container-fluid content">
                <div className="row">
                    <div className="col-md-6">
                    <div className="profile-section">
                        <div className="d-flex align-items-center">
                            <img 
                                src={userProfilePicture || DefaultPicture}
                                alt="Profile Pic" 
                                className="profile-image me-3"
                                onClick={handleProfileImageClick}
                            />
                            <div className="profile-name">{userName || 'Anonymous'}</div>
                        </div>
                        <textarea
                            className="profile-bio form-control mb-2"
                            placeholder={userProfile?.bio || "Your bio here"}
                            rows={6}
                        />
                        <input 
                            type="file"
                            ref={fileInputRef}
                            className="d-none"
                            onChange={handleProfileImageUpload}
                        />
                    </div>
                        <div>
                            {/* Toggle Button */}
                            <Button onClick={toggleDisplay}>
                                {showCarousel ? "Show Gallery" : "Show Carousel"}
                            </Button>

                            {/* Conditional Rendering */}
                            {showCarousel ? <CarouselComponent recipes={recipes} /> : <GalleryComponent recipes={recipes} />}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="recipe-list">
                                <h2>RECIPE LIST</h2>
                                {recipes.map(recipe => (
                                    <Card key={recipe.id} className="mb-3">
                                        <Card.Img variant="top" src={recipe.image} alt="Recipe Image" />
                                        <Card.Body>
                                            <Card.Title>{recipe.title}</Card.Title>
                                            {/* Add more details as needed */}
                                        </Card.Body>
                                    </Card>
                                ))}
                                
                                <Button onClick={() => setShowModal(true)}>Add Recipe</Button>
                                <input 
                                    type="file" 
                                    ref={recipeInputRef}
                                    className="d-none" 
                                    onChange={handleRecipeUpload}
                                />

                                <RecipeUploadModal 
                                    show={showModal} 
                                    handleClose={() => setShowModal(false)} 
                                    handleRecipeSubmit={handleRecipeSubmit} 
                                />
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
}

function CarouselComponent({ recipes }) {
    return (
        <div className="image-carousel mt-3">
            <Carousel>
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={recipe.image || DefaultPicture} alt="Recipe" />
                            <Carousel.Caption>
                                <h3>{recipe.title || 'Untitled Recipe'}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                ) : (
                    <Carousel.Item>
                        <img className="d-block w-100" src={DefaultPicture} alt="Default" />
                        <Carousel.Caption>
                            <h3>No Recipes Available</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
}

function GalleryComponent({ recipes }) {
    return (
        <div className="gallery-container">
            {recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <div key={index} className="gallery-item">
                        <img src={recipe.image || DefaultPicture} alt={recipe.title || 'Recipe'} />
                        <p>{recipe.title}</p>
                    </div>
                ))
            ) : (
                <div className="gallery-default-message">
                    <p>No Recipes Images in Gallery</p>
                    <img src={DefaultPicture} alt="Default" style={{ width: '200px', height: '200px' }}/>
                </div>
            )}
        </div>
    );
}

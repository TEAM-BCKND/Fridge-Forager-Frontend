import React, { useRef , useState , useEffect} from 'react';
import './ProfilePage.css';
import RecipeUploadModal from './RecipeUploadModal';
import Carousel from 'react-bootstrap/Carousel';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import DefaultPicture from './tiny_foodie_profilepic.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Brett from './brett_picture.jpg';



export default function ProfilePage({addRecipe , recipes}) {

    const [bio , setBio] = useState("");
    
    const [showModal, setShowModal] = useState(false);
    const [showCarousel, setShowCarousel] = useState(true);
    const [userProfile, setUserProfile] = useState(null);
    const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

    const fileInputRef = useRef(null);
    const recipeInputRef = useRef(null);
    


    // useEffect(() => {
    //     if (isAuthenticated) {
    //         handleUserProfile();
    //     }
    // }, [isAuthenticated, user]);

    // if (!isAuthenticated) {
    //     return <Navigate to="/" />;
    // }

    useEffect(() => {
        console.log("Current Recipes:", recipes);
    }, [recipes]);

    function handleRecipeSubmit(recipeData){
        addRecipe(recipeData);
    }

    const toggleDisplay = () => {
        setShowCarousel(!showCarousel);
    };

    const handleProfileImageClick = () => {
        fileInputRef.current.click();
    };

    const handleProfileImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        try {
            const formData = new FormData();
            formData.append('image', file);
    
            const token = await getAccessTokenSilently();
            const response = await axios.post(`${SERVER_API}/upload-profile-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
    
            setUserProfile({ ...userProfile, picture: response.data.imageUrl });
        } catch (error) {
            console.error("Error uploading image", error);
        }
    };

    const handleRecipeUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
    
        const newRecipe = { id: recipes.length + 1, title: file.name };

    
        console.log("Updated Recipes:", recipes);
    };

    return (
        <div>
            <div className="container-fluid content">
                <div className="row">
                    <div className="col-md-6">
                    <div className="profile-section">
                        <div className="d-flex align-items-center">
                            <img 
                                src={Brett || DefaultPicture}
                                alt="Profile Pic" 
                                className="profile-image me-3"
                                onClick={handleProfileImageClick}
                            />
                            <div className="profile-name">{userProfile?.name || 'Brett Fort'}</div>
                        </div>
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
                                            <Card.Title>{recipe.name}</Card.Title>
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
                                <h3>{recipe.name || 'Untitled Recipe'}</h3>
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

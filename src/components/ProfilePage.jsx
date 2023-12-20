import React, { useRef , useState } from 'react';
import './ProfilePage.css';
import RecipeUploadModal from './RecipeUploadModal';
import Carousel from 'react-bootstrap/Carousel';
import { useAuth0 } from '@auth0/auth0-react';

export default function ProfilePage() {

    const [showModal, setShowModal] = useState(false);

    const fileInputRef = useRef(null);
    const recipeInputRef = useRef(null);

    const { user } = useAuth0();
    const { name: auth0Name, picture: auth0Picture } = user || {};

    const handleRecipeSubmit = (recipeData) => {
        console.log(recipeData);
    }

    const handleProfileImageClick = () => {
        fileInputRef.current.click();
    };

    const handleProfileImageUpload = (event) => {
        console.log(event.target.files[0]);

    };

    const handleRecipeUpload = (event) => {
        console.log(event.target.files[0]);

    };

    return (
        <div>
            <div className="container-fluid content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="profile-section d-flex align-items-start">
                            <img 
                                src='https://placehold.co/600x400' 
                                alt="Profile Pic" 
                                className="profile-image me-3" 
                                onClick={handleProfileImageClick}
                            />
                            <div>
                                <input 
                                    type="file"
                                    ref={fileInputRef}
                                    className="d-none"
                                    onChange={handleProfileImageUpload}
                                />
                                <div className="profile-name">NAME</div>
                                <input 
                                    type="text" 
                                    className="profile-bio form-control mb-2" 
                                    placeholder="Your bio here" 
                                />
                            </div>
                        </div>
                        <div className="image-carousel mt-3">
                            <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src='https://placehold.co/400x200' alt="First Item" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src='https://placehold.co/400x200' alt="Second Item" />
                                    </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header">
                            HEADER
                            <div className="header-link">NAME & LINK</div>
                            <div className="header-link">NAME & LINK</div>
                        </div>
                        <div className="b-header mt-3">
                            HEADER
                            <button onClick={() => setShowModal(true)}>Add Recipe</button>
                            <input 
                                type="file" 
                                ref={recipeInputRef}
                                className="d-none" 
                                onChange={handleRecipeUpload}
                            />
                        </div>
                        <RecipeUploadModal 
                            show={showModal} 
                            handleClose={() => setShowModal(false)} 
                            handleRecipeSubmit={handleRecipeSubmit} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

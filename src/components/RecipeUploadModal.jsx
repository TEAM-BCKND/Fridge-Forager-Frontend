import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function RecipeUploadModal({ show, handleClose, handleRecipeSubmit }){
    
    const [recipeData, setRecipeData] = useState({
        name: '',
        image: null,
        ingredients: '',
        instructions: ''
    });

    const handleInputChange = (e) => {
        setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = file ? URL.createObjectURL(file) : null;
        setRecipeData({ ...recipeData, image: imageUrl });
    };

    const submitRecipe = () => {
        handleRecipeSubmit(recipeData);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter recipe name" 
                            name="name" 
                            onChange={handleInputChange} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type="file" 
                            name="image" 
                            onChange={handleImageChange} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="List ingredients" 
                            name="ingredients" 
                            onChange={handleInputChange} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Instructions</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter instructions" 
                            name="instructions" 
                            onChange={handleInputChange} 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitRecipe}>
                    Upload Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

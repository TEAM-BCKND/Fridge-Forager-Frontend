
import React, { useState, useEffect } from 'react';
import './LaunchPage.css'; // Import the CSS file for styling

const backgroundImages = [
    './../img/hotdog.jpeg',
    './../img/fridge1.jpeg',
    './../img/fridge2.jpeg',
    './../img/fridge3.jpeg'

    // Add more image URLs as needed
];

const LaunchPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the index to switch to the next image
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 10000); // Change the interval as needed (e.g., 5000 milliseconds for 5 seconds)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        // ... other styles
    };

    return (
        <div className="launch-page" style={backgroundStyle}>
            <h1>Welcome to Fridge Forager!</h1>
            <p>
                We're excited to introduce our new app that helps you discover amazing recipes with the ingredients you have.
            </p>
            <p>
                Features:
            </p>
            <ul>
                <li>Search for recipes based on your available ingredients.</li>
                <li>Save your favorite recipes for quick access.</li>
                <li>Explore a variety of cuisines and cooking styles.</li>
            </ul>
            <p>
                Get started now and turn your kitchen into a culinary adventure!
            </p>
            <div>
                {/* Add any additional links or buttons for users to navigate */}
                <a href="/signup">Sign Up</a> | <a href="/login">Log In</a>
            </div>
        </div>
    );
};

export default LaunchPage;

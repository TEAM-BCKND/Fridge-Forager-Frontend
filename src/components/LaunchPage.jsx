import React from 'react';
import backgroundImage from '/img/hotdog.jpg';

function LaunchPage() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    };

    return (
        <div style={backgroundStyle}>
            <h1>Welcome to our Launch Page!</h1>
            {/* Add any content or links for your launch page */}
        </div>
    );
}

export default LaunchPage;

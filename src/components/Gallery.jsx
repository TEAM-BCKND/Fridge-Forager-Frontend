
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { Card, CardGroup, Row, Col, Container } from 'react-bootstrap';

const PhotoGallery = ({likes, comments, handleLike, handleComment}) => {
  const {
    isAuthenticated,
    user,
  } = useAuth0();
  const photos = [
    {
      id: 1,
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1514.JPEG?updatedAt=1703123622235',
      caption: 'Surf N Turf'
    },
    {
      id: 2, 
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1228.JPEG?updatedAt=1703123569288',
      caption: 'Steak and kale salad'
    },
    {
      id: 3, 
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1358.JPEG?updatedAt=1703124860273',
      caption: 'Gnocchi & Meatballs'
    },
    {
      id: 4,
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1506.JPEG?updatedAt=1703123620092',
      caption: 'Tofu and Pork Rice bowl'
    },
    {
      id: 5, 
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1389.JPEG?updatedAt=1703123602740',
      caption: 'Pan seared Salmon over pasta with white wine sauce'
    },
    {
      id: 6, 
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1377.JPEG?updatedAt=1703123600161',
      caption: 'Beef and Broccoli'
    },
    {
      id: 7,
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1354.JPEG?updatedAt=1703123593952',
      caption: 'T-Bone Steak'
    },
    {
      id: 8, 
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1323.JPEG?updatedAt=1703123588453',
      caption: 'Crab Legs'
    },
    {
      id: 9, 
      src: 'https://ik.imagekit.io/army007/iCloud%20Photos/iCloud%20Photos/IMG_1280.JPEG?updatedAt=1703123579366',
      caption: 'Crab cakes and baked MacN Cheese'
    },
    // more photos
  ];

  

 
  const photosPerRow = 3; // Set the number of photos you want in each row
  const gapBetweenRows = '0.25in'; // Set the gap between rows

  // Ensure there are three rows
  const numRows = Math.ceil(photos.length / photosPerRow);
  const rows = Array.from({ length: numRows }, (_, rowIndex) => {
    const startIndex = rowIndex * photosPerRow;
    const endIndex = startIndex + photosPerRow;
    return photos.slice(startIndex, endIndex);
  });

  return (

    <Container className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="mb-4">
        {/* Your header content */}
      </header>


      {/* Photo Gallery */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <CardGroup>
          {rows.map((row, rowIndex) => (
            <Row key={rowIndex} className="justify-content-center mb-4" style={{ marginBottom: gapBetweenRows }}>
              {row.map((photo) => (
                <Col key={photo.id} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={photo.src}
                      alt={photo.caption}
                      style={{ width: '400px', height: '400px' }}
                    />

                    <Card.Body>
                      <Card.Title>{photo.caption}</Card.Title>

                      <button onClick={() => handleLike(photo.id)}>
                        👍 {likes[photo.id] || 0}
                      </button>

                      <form onSubmit={(e) => handleComment(e, photo.id)}>
                        <input name="comment" />
                        <button type="submit">Add Comment</button>
                      </form>

                      {comments[photo.id]?.map((comment) => (
                        <p key={comment}>{comment}</p>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ))}
        </CardGroup>
      </div>

      {/* Footer */}
      <footer>
        {/* Your footer content */}
      </footer>
    </Container>
  );
};

export default PhotoGallery
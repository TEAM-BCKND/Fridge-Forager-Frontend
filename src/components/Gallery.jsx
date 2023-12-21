
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';

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
    // more photos
  ];

  

  return (
    <CardGroup>
      {photos.map(photo => (
        <Card key={photo.id}>
        
          <Card.Img 
            variant="top"
            src={photo.src}
            alt={photo.caption} 
            style={{width: '400px', height: '400px'}}
          />

          <Card.Body>

            <Card.Title>{photo.caption}</Card.Title>

            <button onClick={() => handleLike(photo.id)}>
             👍 {likes[photo.id] || 0} 
            </button>

            <form onSubmit={e => handleComment(e, photo.id)}>
              <input name="comment" />
              <button type="submit">
                Add Comment
              </button>
            </form>

            {comments[photo.id]?.map(comment => (
              <p key={comment}>{comment}</p>
            ))}

          </Card.Body>
        
        </Card>
      ))}
    </CardGroup>
  );
}

export default PhotoGallery;
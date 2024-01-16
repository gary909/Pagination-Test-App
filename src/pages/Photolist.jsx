import React from 'react';
//import './App.css'; // Importing the CSS file


// This is the PhotoList component
const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <div key={photo.id} className="photo-item">
          <img src={photo.url} alt={photo.title} />
          <h3>{photo.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;

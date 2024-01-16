import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from './pages/Photolist';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10'); // Fetching only 10 photos for example
      setPhotos(response.data);
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Photo Gallery</h1>
      <PhotoList photos={photos} />
    </div>
  );
};

export default App;

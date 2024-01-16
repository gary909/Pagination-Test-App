import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from './pages/Photolist';
import Pagination from './pages/Pagination';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10); // Change this to display more or less items per page

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100'); // Fetching only 10 photos for example
      setPhotos(response.data);
    };

    fetchPhotos();
  }, []);

  // Get current posts
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='app'>
      <h1>Photo Gallery</h1>
      <PhotoList photos={currentPhotos} />
      <Pagination
        itemsPerPage={photosPerPage}
        totalItems={photos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;

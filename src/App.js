import React, { useState, useEffect } from 'react';
import * as api from './Servises/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import filterData from './helpers/filterData';

function App() {
  const [page, setPage] = useState(1);
  const [dataImages, setDataImages] = useState([]);
  const [largeImage, setLargeImage] = useState({});
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const maxPerPage = 12;

  useEffect(() => {
    if (query === '') {
      return;
    }
    searchQuery(page, query, maxPerPage);
  }, [page, query]);

  useEffect(() => {
    if (page > 1) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 400);
    }
  }, [page]);

  const searchQuery = (page, query, maxPerPage) => {
    setIsLoading(true);
    api
      .searchQuery(page, query, maxPerPage)
      .then(({ data }) => {
        setDataImages([...dataImages, ...filterData(data.hits)]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const handleFormSubmit = query => {
    setDataImages([]);
    setPage(1);
    setQuery(query);
  };

  const handleClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickImg = largeImage => {
    setLargeImage(largeImage);
    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      {dataImages.length > 0 && (
        <ImageGallery dataImages={dataImages} onClickImg={handleClickImg} />
      )}
      {isLoading && <Loader />}
      {dataImages.length > 11 && <Button onClick={handleClickLoadMore} />}
      {showModal && <Modal img={largeImage} onClose={toggleModal} />}
    </div>
  );
}

export default App;

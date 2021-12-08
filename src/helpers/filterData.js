const filterData = dataImages =>
  dataImages.map(({ id, webformatURL, tags, largeImageURL }) => ({
    id,
    webformatURL,
    tags,
    largeImageURL,
  }));

export default filterData;

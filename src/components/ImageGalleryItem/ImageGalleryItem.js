import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, onClick }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  werformatURL: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

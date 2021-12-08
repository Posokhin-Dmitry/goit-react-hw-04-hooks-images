import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ dataImages, onClickImg }) => {
  return (
    <ul className="ImageGallery">
      {dataImages.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onClick={onClickImg}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  dataImages: PropTypes.arrayOf(PropTypes.object),
  onClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;

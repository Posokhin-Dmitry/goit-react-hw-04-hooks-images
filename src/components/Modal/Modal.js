import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal({ onClose, img }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlay = e => {
    const overlay = document.querySelector('.Overlay');
    if (e.target === overlay) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlay}>
      <div className="Modal">
        <img src={img.largeImageURL} alt={img.tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.object.isRequired,
};

export default Modal;

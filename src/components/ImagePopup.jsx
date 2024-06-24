import React, { useState } from 'react';
import './ImagePopup.css';

const ImagePopup = ({ src, alt, name, likes, views }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="image-container">
      <img src={src} alt={alt} className="thumbnail" onClick={handleOpen} />
      <div className="image-info">
        <h3>{name}</h3>
      </div>
    
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={src} alt={alt} className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagePopup;
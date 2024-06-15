// Popup.js
import React from 'react';

const Popup = ({ animal, onClose }: {animal: any, onClose: any}) => {
  if (!animal) return null;

  return (
    <div className="popup">
      <div className="popup__content">
        <span className="popup__close" onClick={onClose}>&times;</span>
        <img className="popup__img" src={animal.image} alt={animal.title} />
        <h2>{animal.name}</h2>
        <p>Origin: {animal.origin ?? animal.family}</p>
        <p>Description: {animal.description}</p>
      </div>
    </div>
  );
};

export default Popup;

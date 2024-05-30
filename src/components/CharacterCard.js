import React from 'react';

const CharacterCard = ({ name, image }) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default CharacterCard;
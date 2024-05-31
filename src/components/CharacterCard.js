import React from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default CharacterCard;
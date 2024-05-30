import React from 'react';
import './css/catalog.css'; 
import CharacterCard from './CharacterCard';
import characters from '../data/characters';

const Catalog = () => {
  return (
    <div className="catalog">
      <h1>Character Catalog</h1>
      <div className="character-grid">
        {characters.map(character => (
          <CharacterCard 
            key={character.id} 
            name={character.name} 
            image={character.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
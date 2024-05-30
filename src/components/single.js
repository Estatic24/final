import React from 'react';
import { useParams } from 'react-router-dom';
import characters from '../data/characters';
import './css/Single.css';

function Single() {
  const { id } = useParams();
  const character = characters.find((c) => c.id === parseInt(id));

  if (!character) {
    return <div>Персонаж не найден</div>;
  }

  return (
    <div className="single-character">
      <div className="character-header">
        <div className="character-info">
          <h1>{character.name}</h1>
          <p><strong>Класс:</strong> {character.class}</p>
          <p><strong>Здоровье:</strong> {character.health}</p>
          <p><strong>Мана:</strong> {character.mana}</p>
          <div className="abilities-preview">
            {character.abilities.map((ability) => (
              <img key={ability.name} src={ability.image} alt={ability.name} className="ability-icon" />
            ))}
          </div>
        </div>
        <div className="character-image">
          <img src={character.image} alt={character.name} />
        </div>
      </div>
      <div className="character-lore">
        <h2>Лор</h2>
        <p>{character.lore}</p>
      </div>
      <div className="character-abilities">
        <h2>Умения</h2>
        <div className="abilities-grid">
          {character.abilities.map((ability) => (
            <div key={ability.name} className="ability-card">
              <img src={ability.image} alt={ability.name} />
              <h3>{ability.name}</h3>
              <p>{ability.description}</p>
              <p><strong>Урон:</strong> {ability.damage}</p>
              <video controls>
                <source src={ability.video} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Single;

import React, { useState } from 'react';
import './css/Arcana.css';
import back from './video/backVideo.MP4';
import { arcanaList, findArcanaByPrice } from '../data/arcanaData'; // Убедитесь в правильности пути импорта

function Arcana() {
    const [price, setPrice] = useState('');
    const [arcana, setArcana] = useState(null);

    const handleCalculate = () => {
        const foundArcana = findArcanaByPrice(price);
        setArcana(foundArcana);
    };

    return (
        <div>
            <video autoPlay muted loop id="bg-video">
                <source src={back} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="arcana-container">
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Введите вашу цену"
                    className="price-input"
                />
                <button onClick={handleCalculate} className="calculate-button">
                    Узнать аркану
                </button>
                {arcana && (
                    <div className="arcana-result">
                        <img src={arcana.image} alt={arcana.name} />
                        <div className="arcana-info">
                            <h3>{arcana.name}</h3>
                            <p>Цена: ${arcana.price}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Arcana;
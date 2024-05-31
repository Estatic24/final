import React, { useState } from 'react';
import './Arcana.css'; // Подключаем стили
import back from './video/backVideo.MP4'

function Arcana() {
    const [price, setPrice] = useState('');
    const [arcana, setArcana] = useState(null);

    const handleCalculate = () => {
        // Список аркан с их стоимостями и изображениями
        const arcanaList = {
            "Juggernaut": { price: 35, image: 'images/Juggernaut.png' },
            "Legion Commander": { price: 30, image: 'images/Legion_Commander.png' },
            "Rubick": { price: 25, image: 'images/Rubick.png' },
            "Pudge": { price: 20, image: 'images/Pudge.png' }
        };

        // Находим подходящую аркану
        let foundArcana = Object.entries(arcanaList).reduce((acc, [key, value]) => {
            if (price >= value.price && (!acc || value.price > acc.price)) {
                return { name: key, ...value };
            }
            return acc;
        }, null);

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

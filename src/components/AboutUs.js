import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src="https://via.placeholder.com/800x300" alt="Dota 2 Battle" />
            </div>
            
            <div className="people-info">
                <div className="person">
                <img src="https://via.placeholder.com/100x100" alt="Асхат" class="person-photo"/>
                    <h3>Асхат</h3>
                    <p>Роль: Керри</p>
                    <p>Любимый герой: Anti-Mage</p>
                    <p>Описание: описание.</p>
                </div>
                <div className="person">
                <img src="https://via.placeholder.com/100x100" alt="Олжас" class="person-photo"/>
                    <h3>Олжас</h3>
                    <p>Роль: Саппорт</p>
                    <p>Любимый герой: Crystal Maiden</p>
                    <p>Описание: описание.</p>
                </div>
            </div>

            <div className="contacts">
                <h3>Контакты</h3>
                <p>Email: info@dota2team.com</p>
                <p>Телефон: +123 456 7890</p>
            </div>
        </div>
    );
}

export default AboutUs;
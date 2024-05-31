import React from 'react';
import './css/AboutUs.css';
import banner from './img/banner.jpg';
import askhat from './img/olzhas.jpg';
import olzhas from './img/askhat.jpg'

function AboutUs() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={banner} alt="Dota 2 Battle" />
            </div>
            
            <div className="people-info">
                <div className="person">
                <img src={askhat} alt="Асхат" class="person-photo"/>
                    <h3>Асхат</h3>
                    <p>Роль: Керри</p>
                    <p>Любимый герой: Anti-Mage</p>
                    <p>Описание: описание.</p>
                </div>
                <div className="person">
                <img src={olzhas} alt="Олжас" class="person-photo"/>
                    <h3>Олжас</h3>
                    <p>Роль: Тройка</p>
                    <p>Любимый герой: Pudge</p>
                    <p>Описание: описание.</p>
                </div>
            </div>

            <div className="contacts">
                <h3>Контакты</h3>
                <p>Email: MC_Lovin@narxoz.kz</p>
                <p>Телефон: +123 456 7890</p>
            </div>
        </div>
    );
}

export default AboutUs;
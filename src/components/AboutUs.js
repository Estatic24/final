import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/AboutUs.css';
import banner from './img/banner.jpg';
import askhat from './img/olzhas.jpg';
import olzhas from './img/askhat.jpg';

function AboutUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_8zaodiy', 'template_1alvgys', formData, 'kiF_iBrYbdwMpU2pr')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Сообщение успешно отправлено!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (err) => {
                console.log('FAILED...', err);
                alert('Ошибка при отправке сообщения.');
            });
    };

    return (
        <div className="about-container">
            <div className="about-image">
                <img src={banner} alt="Dota 2 Battle" />
            </div>

            <div className="people-info">
                <div className="person">
                    <img src={askhat} alt="Асхат" className="person-photo" />
                    <h3>Асхат</h3>
                    <p>Роль: Керри</p>
                    <p>Любимый герой: Anti-Mage</p>
                    <p>Описание: супер айдол корейцев(краш 8 классниц).</p>
                </div>
                <div className="person">
                    <img src={olzhas} alt="Олжас" className="person-photo" />
                    <h3>Олжас</h3>
                    <p>Роль: Тройка</p>
                    <p>Любимый герой: Pudge</p>
                    <p>Описание: просто самый красивый человек.</p>
                </div>
            </div>
            <div className="contact-form">
                <h3>Отправить сообщение</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Электронная почта</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Отправить</button>
                </form>
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
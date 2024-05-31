import React from 'react';
import './css/News.css'; 
import back from './img/DOTANews.jpg';
import newsData from '../data/newsData';  // Путь к файлу данных может отличаться

function News() {
    return (
        <div className="news-container">
            <div className="news-image">
                <img src={back} alt="Main News" />
            </div>
            
            <div className="grid-container">
                {newsData.map(news => (
                    <div key={news.id} className="grid-item">
                        <img src={news.image} alt={`News ${news.id}`} />
                        <h3>{news.title}</h3>
                        <p>{news.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;

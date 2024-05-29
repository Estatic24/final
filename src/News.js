import React from 'react';
import './App.css'; 

function News() {
    return (
        <div className="news-container">
            <div className="news-image">
                <img src="https://via.placeholder.com/600x300" alt="Main News" />
            </div>
            
            <div className="grid-container">
                <div className="grid-item">
                    <img src="https://via.placeholder.com/150" alt="News 1" />
                    <h3>Заголовок новости 1</h3>
                    <p>Краткое описание новости 1. Это может быть введение в статью или анонс.</p>
                </div>
                <div className="grid-item">
                    <img src="https://via.placeholder.com/150" alt="News 2" />
                    <h3>Заголовок новости 2</h3>
                    <p>Краткое описание новости 2. Это может быть введение в статью или анонс.</p>
                </div>
                <div className="grid-item">
                    <img src="https://via.placeholder.com/150" alt="News 3" />
                    <h3>Заголовок новости 3</h3>
                    <p>Краткое описание новости 3. Это может быть введение в статью или анонс.</p>
                </div>
                <div className="grid-item">
                    <img src="https://via.placeholder.com/150" alt="News 4" />
                    <h3>Заголовок новости 4</h3>
                    <p>Краткое описание новости 4. Это может быть введение в статью или анонс.</p>
                </div>
            </div>
        </div>
    );
}

export default News;

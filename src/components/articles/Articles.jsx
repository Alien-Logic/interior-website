import React from 'react';
import "./articles.css";

const Articles = ({ data }) => {
  return (
    <div className='container articles-container'>
      <p className='h1 center bold title'>Articles & News</p>
      <p className='text center articles-desc'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      <div className='articles'>
        {data.map((article, index) => (
            <div className='article' key={index}>
                <img src={article.img} />
                <p className='bold h3'>{article.title}</p>
                <div className='article-more'>
                <div>
                <p className='text'>{article.date}</p>
                </div>
                <div className='arr'><img src='/arrow.svg' /></div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Articles

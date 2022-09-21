import React from "react";
import "./article.css";

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="blog-container-article">
      <div className="blog-container-article-image">
        <img src={imageUrl} alt="blog image" />
      </div>
      <div className="blog-container-article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;

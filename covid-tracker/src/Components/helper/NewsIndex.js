import React from "react";
import "../../CSS/NewsIndex.css";

const NewsIndex = ({ news }) => {
  return (
    <div className="newsIndexMainDiv">
      <ul>
        {news.map((article, key) => (
          <div
            className="newsDivEach"
            key={key}
            onClick={() => window.open(`${article.url}`)}
          >
            <li>
              <h3 className="newsTitle">{article.title}</h3>
            </li>

            <p className="desc">{article.description}</p>
            <li>
              <img className="articleImage" src={article.image} alt="" />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewsIndex;

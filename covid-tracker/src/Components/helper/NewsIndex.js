import React from "react";

const NewsIndex = ({news}) => {
    return(
        <div>
            <ul>
                {news.map((article, key) => (
                    <div key={key}>
                        <li><h3>Title: {article.title}</h3></li>
                        <li onClick = {() => window.open(`${article.url}`)}><b>Link:</b> {article.url}</li>
                        <p>{article.description}</p>
                        <li><img src={article.image} alt=""/></li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default NewsIndex;
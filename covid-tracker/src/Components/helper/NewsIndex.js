import React from "react";
import "../../CSS/NewsIndex.css"

const NewsIndex = ({news}) => {
    // debuggerlassName="newsIndexMainDiv"
    return(
        <div className="newsIndexMainDiv">
            <ul>
                {news.map((article, key) => (
                    <div className="newsDivEach" key={key}>
                        <li><h3>Title: {article.title}</h3></li>
                        <li onClick = {() => window.open(`${article.url}`)}><b>Link:</b> {article.url}</li>
                        <p>{article.description}</p>
                        <li><img className="articleImage" src={article.image} alt=""/></li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default NewsIndex;
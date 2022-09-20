import React from 'react'
import ReactTooltip from "react-tooltip";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 data-tip data-for={`${newsUrl}-title`} className="card-title">{title}  </h5>
                    <ReactTooltip id={`${newsUrl}-title`} place="top" effect="solid">
                        {title}
                    </ReactTooltip>
                    <p data-tip data-for={`${newsUrl}-description`} className="card-text card-content">{description}</p>
                    <ReactTooltip id={`${newsUrl}-description`} place="top" effect="solid">
                        {description}
                    </ReactTooltip>
                    <p data-tip data-for={`${newsUrl}-secondary-description`} className="card-text card-secondary-content"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                    <ReactTooltip id={`${newsUrl}-secondary-description`} place="top" effect="solid">
                        By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}
                    </ReactTooltip>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem

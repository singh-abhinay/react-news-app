import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    return (
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: "1", left: "85%" }}
        >
          {source}
        </span>
        <a href={url} target="blank">
          <img src={imageUrl} className="card-img-top" alt={title} />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={url} target="blank" className="btn btn-dark">
            Read More
          </a>
          <p className="card-text">
            <small className="text-muted">
              By : {author ? author : "Unknown"} on{" "}
              {new Date(date).toUTCString(date)}
            </small>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem;

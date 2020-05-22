import React, { Component } from "react";

export class QuoteCard extends Component {
  render() {
    return (
      <div className="image-card">
        <img src={this.props.quote.qImgSrc} alt="some Img" />
        <p>{this.props.quote.qText}</p>
        <ul>
          <li>
            <i>by:</i>
            <span>{this.props.quote.qAuthor}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default QuoteCard;

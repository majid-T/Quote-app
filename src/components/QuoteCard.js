import React, { Component } from "react";
import imgSrc from "../pics/av5.png";

export class QuoteCard extends Component {
  render() {
    return (
      <div className="image-card">
        <img src={this.props.quote.qImgSrc} alt="logo" />
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

import React, { Component } from "react";

export class QuoteCard extends Component {
  render() {
    return (
      <div className="image-card">
        <img src="https://theysaidso.com/img/qod/qod-inspire.jpg" alt="some Img" />
        <p>{this.props.quote.text}</p>
        <ul>
          <li>
            <i>by:</i>
            <span>{this.props.quote.author}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default QuoteCard;

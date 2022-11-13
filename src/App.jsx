import React, { Component } from "react";
import logo from "./assets/FRIENDS Logo.png";

import {
  quoteList,
  quoteListToBeUsed,
  initialRandomNumber,
  initialState,
} from "./constants";

export default class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.generateQuote = this.generateQuote.bind(this);
  }

  componentDidMount() {
    let initialTouchY;

    document.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        initialTouchY = e.changedTouches[0].clientY;
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      (e) => {
        let updatedTouchY = e.changedTouches[0].clientY;
        let scrollDistance = initialTouchY - updatedTouchY;
        window.scrollBy(0, scrollDistance);
        initialTouchY = updatedTouchY;
      },
      { passive: false }
    );
  }

  generateQuote() {
    const text = document.getElementById("text"),
      author = document.getElementById("author"),
      randomNumber = Math.floor(Math.random() * quoteListToBeUsed.length);
    text.style.opacity = 0;
    author.style.opacity = 0;
    setTimeout(() => {
      if (quoteListToBeUsed.length === quoteList.length) {
        quoteListToBeUsed.splice(initialRandomNumber, 1);
      }

      if (quoteListToBeUsed.length === 0) {
        this.setState(initialState);
        for (let i = 0; i < quoteList.length; i++) {
          quoteListToBeUsed.push(quoteList[i]);
        }
      }

      this.setState({
        quoteGenerated: quoteListToBeUsed[randomNumber].quote,
        quoteGeneratedAuthor: quoteListToBeUsed[randomNumber].author,
      });
      quoteListToBeUsed.splice(randomNumber, 1);
      text.style.opacity = 1;
      author.style.opacity = 1;
    }, 500);
  }

  render() {
    return (
      <div>
        <div id="friends-logo-container">
          <img src={logo} alt="F.R.I.E.N.D.S Logo" />
        </div>
        <h1>Quote Machine</h1>
        <div id="quote-box">
          <i className="fa-solid fa-quote-left"></i>
          <p id="text">{this.state.quoteGenerated}</p>
          <p id="author">{`- ${this.state.quoteGeneratedAuthor}`}</p>
          <div id="buttons-container">
            <button id="new-quote" onPointerUp={this.generateQuote}>
              <i className="fa-solid fa-rotate"></i>
            </button>
            <button id="tweet">
              <a
                href="twitter.com/intent/tweet"
                id="tweet-quote"
                target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

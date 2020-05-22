import React, { Component } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import Loading from "./components/Loading";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [], // This should be loaded from and API
      loading: true,
    };
  }

  componentDidMount() {
    const resArr = [];

    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        const arr = data.slice(0, 14);
        arr.map((obj) => {
          let newObj = {
            qText: obj.text,
            qAuthor: obj.author,
            qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
          };

          resArr.push(newObj);
        });
        this.setState({ loading: false, quotes: resArr });
      });
  }

  render() {
    return (
      <>
        <div>
          <h1> Welcome to Quote App</h1>
        </div>
        <div className="App">
          {this.state.loading && <Loading />}
          {!this.state.loading &&
            this.state.quotes.map((q) => <QuoteCard quote={q} />)}
        </div>
      </>
    );
  }
}

export default App;

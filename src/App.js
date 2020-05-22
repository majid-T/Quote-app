import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import Loading from "./components/Loading";

var dummyQ = [
  {
    qText: "Be Strong",
    qAuthor: "Majid",
    qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
  },
  {
    qText: "Never give up",
    qAuthor: "Some1",
    qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
  },
  {
    qText: "Be brave",
    qAuthor: "Jouhn",
    qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
  },
  {
    qText: "Never give up",
    qAuthor: "Some1",
    qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
  },
];

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: dummyQ, // This should be loaded from and API
      loading: false,
    };
  }

  componentWillMount() {
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        const persons = res.data;
        this.setState({ quotes : persons });
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading && <Loading />}
        {!this.state.loading &&
          this.state.quotes.slice(0 , 10).map((q) => <QuoteCard quote={q} />)}
      </div>
    );
  }
}

export default App;

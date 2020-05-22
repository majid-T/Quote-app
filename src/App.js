import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteCard from "./components/QuoteCard";

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quotes :[],
  //   }
  // }

  const quotes = [
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
  ];
  return (
    <div className="App">
      <QuoteCard
        quote={{
          qText: "Be Strong",
          qAuthor: "Majid",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
      <QuoteCard
        quote={{
          qText: "Be Strong",
          qAuthor: "Majid",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
      <QuoteCard
        quote={{
          qText: "Be Strong",
          qAuthor: "Majid",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
      <QuoteCard
        quote={{
          qText: "Be Strong",
          qAuthor: "Majid",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
      <QuoteCard
        quote={{
          qText: "Be Strong",
          qAuthor: "Majid",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
      <QuoteCard
        quote={{
          qText: "Be Strong",
          qAuthor: "Majid",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
      <QuoteCard
        quote={{
          qText: "Never give up or die trying to ",
          qAuthor: "Some1",
          qImgSrc: "https://theysaidso.com/img/qod/qod-inspire.jpg",
        }}
      />
    </div>
  );
}

export default App;

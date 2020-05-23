import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import QuoteCard from "./components/QuoteCard";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Welcome to Quote App");
  expect(linkElement).toBeInTheDocument();
});

test("checking whether QuoteCards generated", () => {
  let dummyQuote = [{
                  qText : "Text1",
                  qAuthor : "Author1",
                  qImgSrc : "https://theysaidso.com/img/qod/qod-inspire.jpg"
                    }];

  const { getByText } = render(<QuoteCard quote={dummyQuote[0]} />)

  const testingQuoteText = getByText("Text1");
  expect(testingQuoteText).toBeInTheDocument();

  const testingQuoteAuthor = getByText("Author1");
  expect(testingQuoteAuthor).toBeInTheDocument();

});

test("Negative test case for QuoteCard", () => {
  let dummyQuote = [{
                  qText : "Text2",
                  qAuthor : "Author2",
                  qImgSrc : "https://theysaidso.com/img/qod/qod-inspire.jpg"
                    }];

  const { queryByText } = render(<QuoteCard quote={dummyQuote[0]} />)

  const testingQuoteText = queryByText("Text1");
  expect(testingQuoteText).toBeNull();

  const testingQuoteAuthor = queryByText("Author1");
  expect(testingQuoteAuthor).toBeNull();

});
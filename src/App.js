import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteBox id="quote-box" />
      </header>
    </div>
  );
}


class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: null
    }
  }

  render(){
    return(
      <div id="boxbuatquoteauth">
        <QuotesAndAuthor />
        <Navbwh />
      </div>
    )
  }
}

class QuotesAndAuthor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotesnya: '"Ini quotesnya"',
      author: '-Ini yg ngomong'
    }
  }
  
  render(){
    return(
      <div>
        <div id="quote-text">
          {this.state.quotesnya}
        </div>
        <div id="author">
          {this.state.author}
        </div>
        
      </div>
    )
  }
}

const Navbwh = () => {
  return(
    <div id='navbwh'>
        
    </div>
  )
  
}

const getRandomNumber = (n) => {
  return Math.floor(Math.random()*n)
}

const quotesList = [
  {
    text: 'Queen Elsa, make a prince. A fancy one.',
    author: 'Anna'
  }
]

export default App;

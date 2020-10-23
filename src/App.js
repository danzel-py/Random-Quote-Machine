import React from 'react';
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


const QuoteBox = () => {
    return(
      <div id="boxbuatquoteauth">
        <QuotesAndAuthor quotesnya='' author='' />
        <Navbwh />
      </div>
    )  
}

const QuotesAndAuthor = (props) =>{
    return(
      <div>
        <div id="quote-text">
          {props.quotesnya}
        </div>
        <div id="author">
          {props.author}
        </div>
        
      </div>
    )
  }

function Navbwh() {
  return (
    <div id='navbwh'>
      <div>
        <a href="https:\\www.twitter.com" id="tweet-quote">logo tweet</a>
      </div>
      <div>
        <a href="https:\\www.fb.com" id="fb-quote">logo fb</a>
      </div>
      <NewQuote />
    </div>
  );

}

class NewQuote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: '',
      auth: ''
    }
    this.generateRandomQuote = this.generateRandomQuote.bind(this)
  }

  generateRandomQuote(){
    let x = getRandomNumber(1)
    this.setState({quotes: quotesList[x].text, auth: quotesList[x].author})
  }
  


  render(){
    return(
      <div>
        <button onClick={this.generateRandomQuote}>New Quote</button>
        <p>{this.state.quotes}-{this.state.auth}</p>
      </div>
    )
  }
}

const getRandomNumber = (numbers) => {
  return Math.floor(Math.random()*numbers)
}

const quotesList = [
  {
    text: 'Queen Elsa, make a prince. A fancy one.',
    author: 'Anna'
  }
]

export default App;

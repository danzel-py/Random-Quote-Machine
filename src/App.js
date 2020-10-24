import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='quote-box-container'>
          <QuoteBox />
        </div>
      </header>
    </div>
  );
}


class QuoteBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: '',
    }
    this.generateQuotes = this.generateQuotes.bind(this)
    this.generateQuotes()
  }

  generateQuotes(){
    let x = Math.floor((Math.random())*3)
    this.setState({
      quote: quotesList[x].quotes,
      author: quotesList[x].author
    })
  }

  componentDidMount(){
    this.generateQuotes()
  }

  render(){
    return(
      <div>
        <div id="text">
          {this.state.quote}
        </div>
        <div id="author">
          -{this.state.author}
        </div>
        <div id="buttons-container">
          <a id="tweet-quote" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            logotwittard
          </a>
          <a id ="fb-share" href="https://www.fb.com" target="_blank" rel="noopener noreferrer">
            logofb
          </a>
          <button id="new-quote" onClick={this.generateQuotes}>
            New Quote
          </button>

        </div>
      </div>
    )
  }
}

const quotesList = [
  {
    quotes: 'Quotes yg pertama, gtw apa',
    author: 'Saya'
  },
  {
    quotes: 'Mari mengerjakan sesuatu',
    author: 'Saya'
  },
  {
    quotes: 'Jangan lupa minum air putih',
    author: 'Saya'
  }

]

export default App;

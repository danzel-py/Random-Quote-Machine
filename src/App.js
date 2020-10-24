import React, {Component} from 'react';
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
        <div id="text" class="text-quote">
          {this.state.quote}
        </div>
        <div id="author">
          -{this.state.author}
        </div>
        <div id="buttons-container">
          <TwitShare {...this.state}/>
          <button id="new-quote" onClick={this.generateQuotes}>
            New Quote
          </button>

        </div>
      </div>
    )
  }
}

class TwitShare extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.gantiSpace = this.gantiSpace.bind(this)
  }

  gantiSpace(sumthin){
    let quoteToDo = this.props[sumthin]
    let quoteDone = quoteToDo.replace(/ /g,'%20')
    return quoteDone
  }

  render(){
    return(
      <div>
        <a id="tweet-quote" 
          href={"https://www.twitter.com/intent/tweet?hashtags=RandomQuotes&text=\""+this.gantiSpace('quote')+"\".%10-"+this.gantiSpace('author')+"&tw_p=tweetbutton&via=pegasimp"} 
          target="_blank" rel="noopener noreferrer"
          >
          Tweet
        </a>
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

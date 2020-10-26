import React from 'react';
import './App.css';

const defaultStyle = {
  transition: "all 100ms ease-in-out",
}

const quotesList = require('./quotesAll.js').quotesList;


function App() {
  return (
    <div className="App">
      <header className="App-header" id="app-body">
        <div id="title">Random Quote Machine</div>
        <p id="byMe">by <a id="myName" href="https://www.linkedin.com/in/danzel-artamadja-273457197/">danzel-py</a></p>
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
  }

  generateQuotes(){
    let x = Math.floor((Math.random())*quotesList.length)
    this.setState({
      quote: quotesList[x].quotes,
      author: quotesList[x].author,
      copied: false
    })
    let r = Math.floor((Math.random())*100)+10
    let g = Math.floor((Math.random())*100)+10
    let b = Math.floor((Math.random())*100)+10
    document.getElementById("quote-box-container").style.backgroundColor = "rgb("+r+","+g+","+b+")";
    document.getElementById("quote-box-container").style.color = `rgb(${r + 170},${g + 170},${b + 170})`; //String Template is Cool
    document.getElementById("app-body").style.backgroundColor = `rgb(${r + 100},${g + 100},${b + 100})`;
    document.getElementById("myName").style.color = `rgb(${g},${b},${r})`;
    let buttonList = document.getElementsByClassName("tombol")
    for(let i=0; i<buttonList.length; i+=1){
      buttonList[i].style.backgroundColor = `rgb(${b + 100},${r + 100},${100})`;
      buttonList[i].style.color = `rgb(${r},${g},${b})`
    }  
  }

  componentDidMount(){
    this.generateQuotes();
  }

  render(){
    return(
      <div id="quote-box">
        <div id="text" class="text-quote">
          {this.state.quote}
        </div>
        <div id="author">
          -{this.state.author}
        </div>
        <div id="buttons-container">
          <TwitShare {...this.state}/>
          <div>
            <button className="tombol" onClick={() => {navigator.clipboard.writeText(this.state.quote+" -"+this.state.author);
            this.setState({copied:true});
            }}>
              Copy to Clipboard
            </button>
            
            <button className="tombol" id="new-quote" onClick={this.generateQuotes}>
              New Quote
            </button>
          </div>
        </div>
          <a id="sauce" href="https://www.inc.com/wanda-thibodeaux/50-quotes-from-ancient-philosophers-that-are-business-relevant-1000s-of-years-la.html" target="_blank" rel="noreferrer noopener">
            Source
          </a>
          {this.state.copied &&
            <div id="copied-massage">
              Copied To Clipboard!
            </div>
          }
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
        <a id="tweet-quote" className="tombol"
          href={"https://www.twitter.com/intent/tweet?hashtags=RandomQuotes&text=\""+this.gantiSpace('quote')+"\".%10-"+this.gantiSpace('author')+"&tw_p=tweetbutton&via=pegasimp"} 
          target="_blank" rel="noopener noreferrer"
          >
          Tweet
        </a>
    )
  }
}

export default App;

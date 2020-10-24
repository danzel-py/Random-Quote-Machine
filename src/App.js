import React from 'react';
import './App.css';

const defaultStyle = {
  transition: "all 100ms ease-in-out",
}

function App() {
  return (
    <div className="App">
      <header className="App-header" id="app-body">
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

  }

  componentDidMount(){
    this.generateQuotes();
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
          <button onClick={() => {navigator.clipboard.writeText(this.state.quote+" -"+this.state.author);
           this.setState({copied:true});
           }}>
            Copy to Clipboard
          </button>
          {this.state.copied &&
            <div>
              Copied To Clipboard!
            </div>
          }
          
          <button id="new-quote" onClick={this.generateQuotes}>
            New Quote
          </button>

          <a href="https://www.inc.com/wanda-thibodeaux/50-quotes-from-ancient-philosophers-that-are-business-relevant-1000s-of-years-la.html" target="_blank" rel="noreferrer noopener">
            Source
          </a>

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
    quotes: 'Pleasure in the job puts perfection in the work.',
    author: 'Aristotle'
  },
  {
    quotes: 'Dignity does not consist in possessing honors, but in deserving them.',
    author: 'Aristotle'
  },
  {
    quotes: 'You will never do anything in this world without courage. It is the greatest quality of the mind next to honor.',
    author: 'Aristotle'
  },
  {
    quotes: 'It is just that we should be grateful, not only to those with whose views we may agree, but also to those who have expressed more superficial views; for these also contributed something, by developing before us the powers of thought.',
    author: 'Aristotle'
  },
  {
    quotes: "Persuasion is achieved by the speaker's personal character when the speech is spoken as to make us think him credible. We believe good men more fully and more readily than others. This is true generally whatever the question is, and absolutely true where exact certainty is impossible and opinions are divided", 
    author: 'Aristotle'
  },
  {
    quotes: 'The life of money-making is one undertaken under compulsion, and wealth is evidently not the good we are seeking; for it is merely useful and for the sake of something else.',
    author: 'Aristotle'
  },
  {
    quotes: 'Luck is what happens when preparation meets opportunity.',
    author: 'Seneca'
  },
  {
    quotes: "He who will not economize will have to agonize.",
    author: "Confucius"
  },
  {
    quotes: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quotes: "Choose a job you love and you will never have to work a day in your life.",
    author: "Confucius"
  },
  {
    quotes: "The will to win, the desire to succeed, the urge to reach your full potential...these are the keys that will unlock the door to personal excellence.",
    author: "Confucius"
  },
  {
    quotes: "Our greatest glory is not in never failing, but in rising every time we fall.",
    author: "Confucius"
  },
  {
    quotes: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    author: "Confucius"
  },
  {
    quotes: "The superior man understands what is right; the inferior man understands what will sell.",
    author: "Confucius"
  },
  {
    quotes: "Success depends on previous preparation, and without such preparation there is sure to be failure.",
    author: "Confucius"
  },
  {
    quotes: "The superior man is distressed by the limitations of his ability; he is not distressed by the fact that men do not recognize the ability that he has.",
    author: "Confucius"
  },
  {
    quotes: "When you are laboring for others, let it be with the same zeal as if it were for yourself.",
    author: "Confucius"
  },
  {
    quotes: "Ability will never catch up with the demand for it.",
    author: "Confucius"
  },
  {
    quotes: "It isn't positions which lend distinction, but men who enhance positions.",
    author: "Agesilaus"
  },
  {
    quotes: "Knowledge, if it does not determine action, is dead to us.",
    author: "Plotinus"
  },
  {
    quotes: "After I'm dead, I'd rather have people ask why I have no monument than why I have one.",
    author: "Marcus Porcius Cato"
  },
  {
    quotes: "Great deeds are usually wrought at great risks.",
    author: "Herodotus"
  },
  {
    quotes: "Haste in every business brings failures.",
    author: "Herodotus"
  },
  {
    quotes: "When you are inspired by some great purpose, some extraordinary project, all your thoughts break their bonds.",
    author: "Patanjali"
  },
  {
    quotes: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes"
  },
  {
    quotes: "In the midst of chaos, there is also opportunity.",
    author: "Sun Tzu"
  },
  {
    quotes: "The bravest are surely those who have the clearest vision of what is before them, glory and danger alike, and yet notwithstanding, go out to meet it.",
    author: "Thucydides"
  },
  {
    quotes: "Beware the barrenness of a busy life.",
    author: "Socrates"
  },
  {
    quotes: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    quotes: "Know how to listen and you will profit even from those who talk badly.",
    author: "Plutarch"
  },
  {
    quotes: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus"
  },
  {
    quotes: "Make the best use of what's in your power and take the rest as it happens.",
    author: "Epictetus"
  },
  {
    quotes: "A good decision is based on knowledge and not numbers.",
    author: "Plato"
  },
  {
    quotes: "Better a little which is well done, than a great deal imperfectly.",
    author: "Plato"
  },
  {
    quotes: "The beginning is the most important part of the work.",
    author: "Plato"
  },
  {
    quotes: "Apply yourself both now and in the next life. Without effort, you cannot be prosperous. Though the land be good, you cannot have an abundant crop without cultivation.",
    author: "Plato"
  },
  {
    quotes: "All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in accordance with his natural gifts, and at the right moment, without meddling with anything else.",
    author: "Plato"
  },
  {
    quotes: "He who is not a good servant will not be a good master.",
    author: "Plato"
  },
  {
    quotes: "As the builders say, the larger stones do not lie well without the lesser.",
    author: "Plato"
  },
  {
    quotes: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    author: "Lao Tzu"
  },
  {
    quotes: 'When the best leader\'s work is done the people say, "We did it ourselves."',
    author: "Lao Tzu"
  },
  {
    quotes: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu"
  },
  {
    quotes: "Mastering others is strength. Mastering yourself is true power.",
    author: "Lao Tzu"
  },
  {
    quotes: "When you are content to be simply yourself and don't compare or compete, everybody will respect you.",
    author: "Lao Tzu"
  },
  {
    quotes: "Great acts are made up of small deeds.",
    author: "Lao Tzu"
  },
  {
    quotes: "An ant on the move does more than a dozing ox.",
    author: "Lao Tzu"
  },
  {
    quotes: "Anticipate the difficult by managing the easy.",
    author: "Lao Tzu"
  },
  {
    quotes: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu"
  },
  {
    quotes: "To see things in the seed, that is genius.",
    author: "Lao Tzu"
  },
  {
    quotes: "People in their handling of affairs often fail when they are about to succeed. If one remains as careful at the end as he was at the beginning, there will be no failure.",
    author: "Lao Tzu"
  }
]

export default App;
